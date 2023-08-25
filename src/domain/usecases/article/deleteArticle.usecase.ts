import { ArticleRepositoryPort } from '../../port/article.repository.port';

export class DeleteArticleUseCase {
  constructor(private readonly articleRepos: ArticleRepositoryPort) {}
  async execute(id: number): Promise<void> {
    await this.articleRepos.deleteById(id);
  }
}
