import { ArticleRepositoryInterface } from '../../../domain/port/article.repository.interface';
import { ArticleModel } from '../../../domain/model/Article.model';

export class GetAllArticlesUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryInterface) {}
  async execute(): Promise<ArticleModel[]> {
    return this.articleRepos.findAll();
  }
}
