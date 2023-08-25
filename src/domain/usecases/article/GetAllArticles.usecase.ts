import { ArticleRepositoryPort } from '../../port/article.repository.port';
import { ArticleModel } from '../../model/Article.model';

export class GetAllArticlesUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryPort) {}
  async execute(): Promise<ArticleModel[]> {
    return this.articleRepos.findAll();
  }
}
