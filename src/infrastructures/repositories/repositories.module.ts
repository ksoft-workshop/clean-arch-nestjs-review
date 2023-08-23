import { Module } from '@nestjs/common';
import { ArticleRepository } from './article.repository';
import { PrismaModule } from '../prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ArticleRepository],
  exports: [ArticleRepository],
})
export class RepositoriesModule {}
