import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string) {
    return this.usersRepository.findOneBy({ username });
  }

  public async create(user: Users) {
    const exist = await this.usersRepository.findOneBy({
      username: user.username,
    });

    if (exist) {
      throw new BadRequestException('User already exists');
    }

    const password = await bcrypt.hash(user.password, 10);

    const record: Users = {
      ...user,
      password,
    };

    this.usersRepository.save(record);

    return {
      statusCode: HttpStatus.OK,
      message: 'User created',
      id: record.id,
    };
  }
}
