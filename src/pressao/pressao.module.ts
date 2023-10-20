import { Module } from '@nestjs/common';
import { PressaoService } from './pressao.service';
import { PressaoController } from './pressao.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PressaoModel } from './model/pressao.model';

@Module({
  imports: [SequelizeModule.forFeature([PressaoModel])],
  controllers: [PressaoController],
  providers: [PressaoService],
})
export class PressaoModule {}
