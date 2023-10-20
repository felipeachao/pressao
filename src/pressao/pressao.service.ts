import { Injectable } from '@nestjs/common';
import { CreatePressaoDto } from './dto/create-pressao.dto';
import { UpdatePressaoDto } from './dto/update-pressao.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PressaoModel } from './model/pressao.model';

@Injectable()
export class PressaoService {
  constructor(
    @InjectModel(PressaoModel)
    private readonly pressaoModel: typeof PressaoModel,
  ) {}
  async create(createPressaoDto: CreatePressaoDto) {
    try {
      createPressaoDto['turno'] = this.turno(new Date());
      return await this.pressaoModel.create(createPressaoDto);
    } catch (error) {
      console.log(error);
    }
  }

  private turno(hour: Date): string {
    try {
      const hora = hour.getHours();

      if (hora >= 6 && hora < 12) {
        return 'Manhã';
      } else if (hora >= 12 && hora < 18) {
        return 'Tarde';
      } else {
        return 'Noite';
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.pressaoModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} pressao`;
  }

  update(id: number, updatePressaoDto: UpdatePressaoDto) {
    return `This action updates a #${id} pressao`;
  }

  remove(id: number) {
    return `This action removes a #${id} pressao`;
  }
}
