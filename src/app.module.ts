import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { Mahasiswa } from './mahasiswa/entities/mahasiswa.entity';
import { MatakuliahController } from './matakuliah/matakuliah.controller';
import { MatakuliahService } from './matakuliah/matakuliah.service';
import { MatakuliahModule } from './matakuliah/matakuliah.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Mahasiswa],
      synchronize: true,
    }),
    MahasiswaModule,
    MatakuliahModule,
  ],
  controllers: [AppController, MatakuliahController],
  providers: [AppService, MatakuliahService],
})
export class AppModule {}
