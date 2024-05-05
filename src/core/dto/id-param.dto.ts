import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class IdParamDto {
  @ApiProperty({
    description: 'Id сущности',
    example: 1,
  })
  @Type(() => Number)
  id: number;
}
