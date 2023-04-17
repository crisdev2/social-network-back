import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IPosts } from './posts.interface';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public findAll(): Array<IPosts> {
    return this.postsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number): IPosts {
    return this.postsService.findOne(id);
  }

  @Post()
  public create(@Body() record: IPosts): IPosts {
    return this.postsService.create(record);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }

  @Put(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() record: IPosts,
  ): IPosts {
    return this.postsService.update(id, record);
  }
}
