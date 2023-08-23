import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UseCasesProxyModule } from '../../usecasesproxy/usecasesproxy.module';
import { UseCaseProxy } from '../../usecasesproxy/usecase.proxy';
import { CreateArticleUseCase } from '../../../application/usecases/article/CreateArticle.usecase';
import { UpdateArticleUseCase } from '../../../application/usecases/article/UpdateArticle.usecase';
import { GetAllArticlesUseCase } from '../../../application/usecases/article/GetAllArticles.usecase';
import { CreateArticleDto } from '../../../application/dtos/createArticle.dto';
import { ArticleModel } from '../../../domain/model/Article.model';
import { ArticleFactory } from '../../../application/usecases/article/article.factory';
import { UpdateArticleDto } from '../../../application/dtos/updateArticle.dto';

@Controller('articles')
export class ArticleControllerController {
  constructor(
    @Inject(UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY)
    private readonly createArticleUseCaseProxy: UseCaseProxy<CreateArticleUseCase>,

    @Inject(UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY)
    private readonly updateArticleUseCaseProxy: UseCaseProxy<UpdateArticleUseCase>,

    @Inject(UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY)
    private readonly getArticleUseCaseProxy: UseCaseProxy<GetAllArticlesUseCase>,
    private articleFactory: ArticleFactory,
  ) {}
  @Get()
  async getArticles() {
    return await this.getArticleUseCaseProxy.getInstance().execute();
  }
  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<ArticleModel> {
    const article = this.articleFactory.createArticle(createArticleDto);
    return await this.createArticleUseCaseProxy.getInstance().execute(article);
  }
  @Patch(':id')
  async updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<any> {
    const article = this.articleFactory.updateArticle(updateArticleDto);
    return await this.updateArticleUseCaseProxy
      .getInstance()
      .execute(id, article);
  }
}
