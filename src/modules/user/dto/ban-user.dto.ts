import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({
    example: 'За сквернословие',
    description: 'Причина блокировки',
  })
  readonly banReason: string;

  @ApiProperty({
    example: 3,
    description: 'Id пользователя',
  })
  readonly id: number;
}
