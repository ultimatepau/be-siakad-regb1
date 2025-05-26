import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { MatakuliahController } from './matakuliah/matakuliah.controller';
import { MatakuliahService } from './matakuliah/matakuliah.service';
import { MatakuliahModule } from './matakuliah/matakuliah.module';

@Module({
  imports: [MahasiswaModule, MatakuliahModule],
  controllers: [AppController, MatakuliahController],
  providers: [AppService, MatakuliahService],
})
export class AppModule {}
