import {
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { IPosts } from './posts.interface';

@Injectable()
export class PostsService {
  private posts: Array<IPosts> = [];
  private readonly logger = new Logger(PostsService.name);

  public findAll(): Array<IPosts> {
    return this.posts;
  }

  public findOne(id: number): IPosts {
    const record: IPosts = this.posts.find((record) => record.id === id);

    if (!record) {
      throw new NotFoundException('Post not found.');
    }

    return record;
  }

  public create(post: IPosts): IPosts {
    const maxId: number = Math.max(...this.posts.map((record) => record.id), 0);
    const id: number = maxId + 1;

    const created = new Date();

    const record: IPosts = {
      ...post,
      created,
      id,
    };

    this.posts.push(record);

    return record;
  }

  public delete(id: number) {
    const index: number = this.posts.findIndex((record) => record.id === id);

    if (index === -1) {
      throw new NotFoundException('Post not found');
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Record deleted',
    };
  }

  public update(id: number, post: IPosts): IPosts {
    this.logger.log(`Updating post with id: ${id}`);

    const index: number = this.posts.findIndex((record) => record.id === id);

    if (index === -1) {
      throw new NotFoundException('Post not found');
    }

    const record: IPosts = {
      ...post,
      id,
    };

    this.posts[index] = record;

    return record;
  }
}
