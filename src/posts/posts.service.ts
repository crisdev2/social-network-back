import {
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';
import { Users } from '../users/users.entity';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  public async findAll() {
    return await this.postsRepository.find({
      where: {
        idParent: null,
      },
      relations: {
        idAuthor: true,
        idParent: true,
      },
    });
  }

  public async findOne(id: number) {
    const record = await this.postsRepository.findOne({
      where: { id },
      relations: {
        idAuthor: true,
        idParent: true,
        idChildren: true,
      },
    });

    if (!record) {
      throw new NotFoundException('Post not found.');
    }

    return record;
  }

  public async create(post: Posts, user: Users) {
    const created = new Date();

    const idAuthor = await this.usersRepository.findOneBy({
      id: user.id,
    });

    const data: Posts = {
      ...post,
      created,
      idAuthor,
    };

    const record = await this.postsRepository.save(data);

    return await this.postsRepository.findOne({
      where: { id: record.id },
      relations: {
        idAuthor: true,
        idParent: true,
        idChildren: true,
      },
    });
  }

  public async delete(id: number) {
    const record = await this.postsRepository.findOneBy({ id });

    if (!record) {
      throw new NotFoundException('Post not found');
    }

    await this.postsRepository.delete(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Record deleted',
    };
  }

  public async update(id: number, data: Posts) {
    this.logger.log(`Updating post with id: ${id}`);

    const record = await this.postsRepository.findOne({
      where: { id },
      relations: { idAuthor: true, idParent: true, idChildren: true },
    });

    if (!record) {
      throw new NotFoundException('Post not found');
    }

    const posts: Posts = {
      ...record,
      ...data,
    };

    const updated = await this.postsRepository.save(posts);

    return await this.postsRepository.findOne({
      where: { id: updated.id },
      relations: {
        idAuthor: true,
        idParent: true,
        idChildren: true,
      },
    });
  }
}
