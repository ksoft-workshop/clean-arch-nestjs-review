import { ArticleRepositoryPort } from '../../port/article.repository.port';
import { ArticleModel } from '../../model/Article.model';

export class GetArticleUsecase {
  constructor(private readonly articleRepos: ArticleRepositoryPort) {}
  async execute(id: number): Promise<ArticleModel> {
    return this.articleRepos.findById(id);
  }
}
