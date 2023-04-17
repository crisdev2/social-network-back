import { Posts } from 'src/posts/posts.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column()
  image: string;

  @Column()
  password: string;

  @OneToMany(() => Posts, (posts) => posts.idAuthor)
  idPosts: Posts[];
}
