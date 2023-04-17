import { HttpStatus, Injectable } from '@nestjs/common';
import { IUsers } from './users.interface';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private users: Array<IUsers> = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  public async create(user: IUsers) {
    const maxId: number = Math.max(...this.users.map((record) => record.id), 0);
    const id: number = maxId + 1;

    const password = await bcrypt.hash(user.password, 10);

    const record: IUsers = {
      ...user,
      password,
      id,
    };

    this.users.push(record);

    return {
      statusCode: HttpStatus.OK,
      message: 'User created',
      id: record.id,
    };
  }
}
