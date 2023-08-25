import { ArticleRepositoryPort } from '../../port/article.repository.port';
import { ArticleModel } from '../../model/Article.model';

export class CreateArticleUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryPort) {}
  async execute(data: ArticleModel): Promise<ArticleModel> {
    return this.articleRepos.create(data);
  }
}
