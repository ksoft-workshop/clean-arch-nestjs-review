import { Module } from '@nestjs/common';
import { ArticleRepositoryAdapter } from './article.repository.adapter';
import { PrismaModule } from '../prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ArticleRepositoryAdapter],
  exports: [ArticleRepositoryAdapter],
})
export class RepositoriesModule {}
