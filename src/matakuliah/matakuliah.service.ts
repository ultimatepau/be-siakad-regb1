import { Injectable } from '@nestjs/common';
import { Matakuliah } from './entities/matakuliah.entity';
import { CreateMataKuliahDTO } from './dto/create-matakuliah.dto';
import { UpdateMataKuliah } from './dto/update-matakuliah.dto';

@Injectable()
export class MatakuliahService {
  private data: Matakuliah[] = [];

  create(dto: CreateMataKuliahDTO): Matakuliah {
    const newMatkul = new Matakuliah(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    const find = this.findOne(dto.kode);
    if (find) {
      throw new Error('Kode sudah ada');
    } else {
      this.data.push(newMatkul);
    }
    return newMatkul;
  }

  findAll(): Matakuliah[] {
    return this.data;
  }

  findOne(kode: string): Matakuliah | undefined {
    return this.data.find((m) => m.kode === kode);
  }

  update(kode: string, dto: UpdateMataKuliah): Matakuliah | null {
    if (!dto.kode || !dto.nama || !dto.sks || !dto.semester || !dto.jurusan) {
      throw new Error('Semua field wajib diisi untuk update');
    }

    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;

    const updated = new Matakuliah(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    this.data[index] = updated;
    return updated;
  }

  remove(kode: string): Matakuliah | null {
    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;

    const deleted = this.data[index];
    this.data.splice(index, 1);
    return deleted;
  }
}
