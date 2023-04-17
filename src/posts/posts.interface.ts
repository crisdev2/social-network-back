import { IUsers } from 'src/users/users.interface';

export interface IPosts {
  id?: number;
  created: Date;
  body: string;
  idAuthor: IUsers;
}
