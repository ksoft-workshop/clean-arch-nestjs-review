export class ArticleModel {
  id: number;
  title: string;
  description: string | null;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
