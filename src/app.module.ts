import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { Mahasiswa } from './mahasiswa/entities/mahasiswa.entity';
import { MatakuliahController } from './matakuliah/matakuliah.controller';
import { MatakuliahService } from './matakuliah/matakuliah.service';
import { MatakuliahModule } from './matakuliah/matakuliah.module';
import { EmailModule } from './email/email.module';

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
    ScheduleModule.forRoot(),
    MahasiswaModule,
    MatakuliahModule,
    EmailModule,
  ],
  controllers: [AppController, MatakuliahController],
  providers: [AppService, MatakuliahService, TasksService],
})
export class AppModule {}
