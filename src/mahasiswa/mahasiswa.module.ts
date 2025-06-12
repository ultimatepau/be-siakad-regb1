import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MahasiswaService } from './mahasiswa.service';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { MahasiswaController } from './mahasiswa.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [TypeOrmModule.forFeature([Mahasiswa]), EmailModule],
  controllers: [MahasiswaController],
  providers: [MahasiswaService],
})
export class MahasiswaModule {}
