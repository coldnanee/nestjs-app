import { ApiProperty } from '@nestjs/swagger';
import { CreationOptional } from 'sequelize';
import {
  Model,
  DataType,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

export class BaseEntity<T, C = never> extends Model<T, C> {
  @ApiProperty({
    example: 1,
    description: 'Id сущности',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @CreatedAt
  declare createDate: CreationOptional<Date>;

  @UpdatedAt
  declare updateDate: CreationOptional<Date>;
}
