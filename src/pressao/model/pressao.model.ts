import { AutoIncrement, Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Pressao',
})
export class PressaoModel extends Model<PressaoModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  valor: string;

  @Column
  turno: string;
}
