import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  created: Date;

  @Column()
  body: string;

  @ManyToOne(() => Users, (user) => user.idPosts)
  idAuthor: Users;

  @ManyToOne(() => Posts, (post) => post.idParent)
  idParent: Posts;

  @OneToMany(() => Posts, (post) => post.idParent)
  idChildren: Posts[];
}
