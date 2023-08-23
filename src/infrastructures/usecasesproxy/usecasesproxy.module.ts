import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ArticleRepository } from '../repositories/article.repository';
import { UseCaseProxy } from './usecase.proxy';
import { GetAllArticlesUseCase } from '../../application/usecases/GetAllArticles.usecase';
import { CreateArticleUseCase } from '../../application/usecases/CreateArticle.usecase';
import { UpdateArticleUseCase } from '../../application/usecases/UpdateArticle.usecase';

@Module({
  imports: [RepositoriesModule],
})
export class UseCasesProxyModule {
  static GET_ALL_ARTICLE_USECASE_PROXY = 'getAllArticleUseCaseProxy';
  static CREATE_ARTICLE_USECASE_PROXY = 'createArticleUseCaseProxy';
  static UPDATE_ARTICLE_USECASE_PROXY = 'updateArticleUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [ArticleRepository],
          provide: UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepository) =>
            new UseCaseProxy(new CreateArticleUseCase(articleRepos)),
        },
        {
          inject: [ArticleRepository],
          provide: UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepository) =>
            new UseCaseProxy(new UpdateArticleUseCase(articleRepos)),
        },
        {
          inject: [ArticleRepository],
          provide: UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepository) =>
            new UseCaseProxy(new GetAllArticlesUseCase(articleRepos)),
        },
      ],
      exports: [
        UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY,
      ],
    };
  }
}
