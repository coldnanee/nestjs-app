import { Column, DataType, HasOne, Table } from 'sequelize-typescript';
import { BaseEntity } from '@/core/database/entities';
import { UserEntity } from './user.entity';
import { NonAttribute } from 'sequelize';

export type TBannedUser = {
  id: number;
  userId: number;
  banReason: string;
};

export type TCreateBannedUser = {
  userId: number;
  banReason: string;
};

@Table({
  tableName: 'banned-users',
})
export class BannedUserEntity extends BaseEntity<
  TBannedUser,
  TCreateBannedUser
> {
  @HasOne(() => UserEntity, 'userId')
  declare user?: NonAttribute<UserEntity>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  banReason: string;
}
