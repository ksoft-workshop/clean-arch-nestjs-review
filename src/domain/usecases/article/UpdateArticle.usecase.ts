import { ArticleRepositoryAdapter } from '../../../infrastructures/repositories/article.repository.adapter';
import { ArticleModel } from '../../model/Article.model';

export class UpdateArticleUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryAdapter) {}
  async execute(id: number, data: ArticleModel): Promise<any> {
    return this.articleRepos.updateArticle(id, data);
  }
}
