import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../../../infrastructures/dtos/createArticle.dto';
import { ArticleModel } from '../../model/Article.model';
import { UpdateArticleDto } from '../../../infrastructures/dtos/updateArticle.dto';

@Injectable()
export class ArticleFactory {
  createArticle(createArticleDto: CreateArticleDto): ArticleModel {
    const article = new ArticleModel();
    article.title = createArticleDto.title;
    article.description = createArticleDto.description;
    article.body = createArticleDto.body;
    article.published = createArticleDto.published;
    return article;
  }
  updateArticle(updateArticle: UpdateArticleDto): ArticleModel {
    const article = new ArticleModel();
    article.title = updateArticle.title;
    article.description = updateArticle.description;
    article.body = updateArticle.body;
    article.published = updateArticle.published;

    return article;
  }
  
}
