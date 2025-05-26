import { Module } from '@nestjs/common';
import { MatakuliahController } from './matakuliah.controller';
import { MatakuliahService } from './matakuliah.service';

@Module({
  controllers: [MatakuliahController],
  providers: [MatakuliahService],
})
export class MatakuliahModule {}
