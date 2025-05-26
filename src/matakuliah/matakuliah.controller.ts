import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MatakuliahService } from './matakuliah.service';
import { CreateMataKuliahDTO } from './dto/create-matakuliah.dto';
import { UpdateMataKuliah } from './dto/update-matakuliah.dto';

@Controller('matakuliah')
export class MatakuliahController {
  constructor(private readonly service: MatakuliahService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':kode')
  findOne(@Param('kode') kode: string) {
    const matkul = this.service.findOne(kode);
    if (!matkul) {
      throw new NotFoundException(
        `Mahasiswa dengan Kode ${kode} tidak ditemukan`,
      );
    }
    return matkul;
  }

  @Post()
  create(@Body() dto: CreateMataKuliahDTO) {
    try {
      const data = this.service.create(dto);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
    }
  }

  @Put(':kode')
  update(@Param('kode') kode: string, @Body() dto: UpdateMataKuliah) {
    try {
      const updated = this.service.update(kode, dto);
      if (!updated) {
        throw new NotFoundException(
          `Mahasiswa dengan Kode ${kode} tidak ditemukan`,
        );
      }
      return updated;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Terjadi kesalahan tak dikenal');
    }
  }

  @Delete(':kode')
  remove(@Param('kode') kode: string) {
    const deleted = this.service.remove(kode);
    if (!deleted) {
      throw new NotFoundException(
        `Mahasiswa dengan Kode ${kode} tidak ditemukan`,
      );
    }
    return deleted;
  }
}
