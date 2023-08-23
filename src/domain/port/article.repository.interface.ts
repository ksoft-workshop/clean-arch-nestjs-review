import { ArticleModel } from '../model/Article.model';

export interface ArticleRepositoryInterface {
  create(data: ArticleModel): Promise<ArticleModel>;
  findAll(): Promise<ArticleModel[]>;
  findById(id: number): Promise<ArticleModel>;
  updateArticle(id: number, article: ArticleModel): Promise<any>;
  deleteById(id: number): Promise<any>;
}
