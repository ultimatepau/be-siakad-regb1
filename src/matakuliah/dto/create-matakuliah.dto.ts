import { IsString, IsNumber } from 'class-validator';
export class CreateMataKuliahDTO {
  @IsString({ message: 'Kode harus berupa teks' })
  kode: string;

  @IsString({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsNumber({}, { message: 'Sks harus berupa angka' })
  sks: number;

  @IsString({ message: 'Semester tidak boleh kosong' })
  semester: string;

  @IsString({ message: 'Jurusan tidak boleh kosong' })
  jurusan: string;
}
