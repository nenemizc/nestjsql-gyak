import { Controller, Get, Render, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateJatekDto } from './create-jatek.dto.js';

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

  @Get('ujJatek')
  @Render('ujJatek')
  ujJatekForm() {
    return {};
  }

  @Post('ujJatek')
  @Render('ujJatek')
  async createJatekPost(@Body() createJatekDto: CreateJatekDto) {
      const createdJatek = await this.appService.createJatek(createJatekDto.nev);
      return { createdJatek };
  }
}
