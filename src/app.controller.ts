import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('macskak')
  @Render('macskak')
  async getMacskak() {
    return {
      macskak: await this.appService.macskaLista(),
    }
  }

  @Get('jatekok')
  @Render('jatekok')
  async GetJatekok(){
    return{
      jatekok: await this.appService.jatekLista()
    }
  }

  @Get('macskaKeres')
  @Render('macskaKeres')
  async macskaKeres(@Query('nev') nev: string = '') {
    return {
      macskak: await this.appService.macskaKeres(nev)
    }
  }
}
