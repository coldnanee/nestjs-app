import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { BanUserDto, CreateUserDto } from './dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  OmitType,
} from '@nestjs/swagger';
import { UserEntity } from './entity';

@ApiTags('Пользователи')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Создание нового пользователя',
  })
  @ApiOkResponse({
    description: 'Созданный пользователь',
    type: OmitType(UserEntity, ['password']),
  })
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({
    summary: 'Получить список всех пользователей',
  })
  @ApiOkResponse({
    description: 'Полученные пользователи',
    type: [OmitType(UserEntity, ['password'])],
  })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({
    summary: 'Заблокировать пользователя',
  })
  @Post('/ban')
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
