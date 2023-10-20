import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PressaoService } from './pressao.service';
import { CreatePressaoDto } from './dto/create-pressao.dto';
import { UpdatePressaoDto } from './dto/update-pressao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pressão')
@Controller('pressao')
export class PressaoController {
  constructor(private readonly pressaoService: PressaoService) {}

  @Post()
  create(@Body() createPressaoDto: CreatePressaoDto) {
    return this.pressaoService.create(createPressaoDto);
  }

  @Get()
  findAll() {
    return this.pressaoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pressaoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePressaoDto: UpdatePressaoDto) {
  //   return this.pressaoService.update(+id, updatePressaoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pressaoService.remove(+id);
  // }
}
