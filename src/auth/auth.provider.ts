import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthProvider {
  static async generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
