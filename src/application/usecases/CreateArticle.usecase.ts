import { ArticleRepositoryInterface } from '../../domain/port/article.repository.interface';
import { ArticleModel } from '../../domain/model/Article.model';

export class CreateArticleUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryInterface) {}
  async execute(data: ArticleModel): Promise<ArticleModel> {
    return this.articleRepos.create(data);
  }
}
