import { ArticleRepositoryInterface } from '../../domain/port/article.repository.interface';
import { ArticleModel } from '../../domain/model/Article.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';

@Injectable()
export class ArticleRepository implements ArticleRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  create(article: ArticleModel): Promise<ArticleModel> {
    return this.prisma.article.create({ data: article });
  }

  deleteById(id: number): Promise<any> {
    return this.prisma.article.delete({ where: { id } });
  }

  findAll(): Promise<ArticleModel[]> {
    return this.prisma.article.findMany();
  }

  findById(id: number): Promise<ArticleModel> {
    return this.prisma.article.findUnique({ where: { id } });
  }

  updateArticle(id: number, article: ArticleModel): Promise<any> {
    return this.prisma.article.update({
      where: { id },
      data: article,
    });
  }
}
