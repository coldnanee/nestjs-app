import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BannedUserEntity, UserEntity } from './entity';
import { CreateUserDto, BanUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity) private readonly userRepository: typeof UserEntity,
    @InjectModel(BannedUserEntity)
    private readonly bannedUserRepository: typeof BannedUserEntity,
  ) {}

  async createUser({ email, password }: CreateUserDto) {
    const candidate = await this.userRepository.findOne({ where: { email } });

    if (candidate) {
      throw new BadRequestException(
        'Пользователь с таким email уже существует',
      );
    }

    return this.userRepository.create({ email, password });
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async banUser({ id, ...dto }: BanUserDto) {
    console.log(id);
    const user = await this.userRepository.findOne({ where: { id } });

    console.log(user);

    if (!user) {
      throw new BadRequestException(`Пользователь с id: ${id} не найден`);
    }

    const bannedUser = await this.bannedUserRepository.findOne({
      where: { userId: id },
    });

    if (bannedUser) {
      throw new BadRequestException('Пользователь уже заблокирован');
    }

    return this.bannedUserRepository.create(dto);
  }
}
