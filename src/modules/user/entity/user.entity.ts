import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseEntity } from '@/core/database/entities';
import { ApiProperty } from '@nestjs/swagger';

export type TUser = {
  id: number;
  email: string;
  password: string;
};

type TCreatableUser = Omit<TUser, 'id'>;

@Table({
  tableName: 'users',
})
export class UserEntity extends BaseEntity<TUser, TCreatableUser> {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'Почтовый адрес',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
