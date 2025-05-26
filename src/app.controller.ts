import { Controller, Get } from '@nestjs/common';
// import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':name')
  // greet(@Param('name') name: string, @Query('age') age: number): string {
  //   return !age ? `Hello, ${name}` : `Hello, ${name}, your age is ${age}`;
  // }
}
