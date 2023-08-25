import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ArticleRepositoryAdapter } from '../repositories/article.repository.adapter';
import { UseCaseProxy } from './usecase.proxy';
import { GetAllArticlesUseCase } from '../../domain/usecases/article/GetAllArticles.usecase';
import { CreateArticleUseCase } from '../../domain/usecases/article/CreateArticle.usecase';
import { UpdateArticleUseCase } from '../../domain/usecases/article/UpdateArticle.usecase';
import { GetArticleUsecase } from '../../domain/usecases/article/GetArticle.usecase';
import { DeleteArticleUseCase } from '../../domain/usecases/article/deleteArticle.usecase';

@Module({
  imports: [RepositoriesModule],
})
export class UseCasesProxyModule {
  static GET_ALL_ARTICLE_USECASE_PROXY = 'getAllArticleUseCaseProxy';
  static CREATE_ARTICLE_USECASE_PROXY = 'createArticleUseCaseProxy';
  static UPDATE_ARTICLE_USECASE_PROXY = 'updateArticleUseCaseProxy';
  static GET_ARTICLE_USECASE_PROXY = 'getArticleUseCaseProxy';
  static DELETE_ARTICLE_USECASE_PROXY = 'deleteArticleUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [ArticleRepositoryAdapter],
          provide: UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepositoryAdapter) =>
            new UseCaseProxy(new CreateArticleUseCase(articleRepos)),
        },
        {
          inject: [ArticleRepositoryAdapter],
          provide: UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepositoryAdapter) =>
            new UseCaseProxy(new UpdateArticleUseCase(articleRepos)),
        },
        {
          inject: [ArticleRepositoryAdapter],
          provide: UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepositoryAdapter) =>
            new UseCaseProxy(new GetAllArticlesUseCase(articleRepos)),
        },
        {
          inject: [ArticleRepositoryAdapter],
          provide: UseCasesProxyModule.GET_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepositoryAdapter) =>
            new UseCaseProxy(new GetArticleUsecase(articleRepos)),
        },
        {
          inject: [ArticleRepositoryAdapter],
          provide: UseCasesProxyModule.DELETE_ARTICLE_USECASE_PROXY,
          useFactory: (articleRepos: ArticleRepositoryAdapter) =>
            new UseCaseProxy(new DeleteArticleUseCase(articleRepos)),
        },
      ],
      exports: [
        UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.GET_ARTICLE_USECASE_PROXY,
        UseCasesProxyModule.DELETE_ARTICLE_USECASE_PROXY,
      ],
    };
  }
}
