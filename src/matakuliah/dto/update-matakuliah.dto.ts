import { PartialType } from '@nestjs/mapped-types';
import { CreateMataKuliahDTO } from './create-matakuliah.dto';

export class UpdateMataKuliah extends PartialType(CreateMataKuliahDTO) {}
