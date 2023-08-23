import { ArticleRepository } from '../../infrastructures/repositories/article.repository';
import { ArticleModel } from '../../domain/model/Article.model';

export class UpdateArticleUseCase {
  constructor(private readonly articleRepos: ArticleRepository) {}
  async execute(id: number, data: ArticleModel): Promise<any> {
    return this.articleRepos.updateArticle(id, data);
  }
}
