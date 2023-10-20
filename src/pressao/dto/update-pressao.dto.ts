import { PartialType } from '@nestjs/swagger';
import { CreatePressaoDto } from './create-pressao.dto';

export class UpdatePressaoDto extends PartialType(CreatePressaoDto) {}
