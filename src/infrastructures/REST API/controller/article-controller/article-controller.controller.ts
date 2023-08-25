import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UseCasesProxyModule } from '../../../usecasesproxy/usecasesproxy.module';
import { UseCaseProxy } from '../../../usecasesproxy/usecase.proxy';
import { CreateArticleUseCase } from '../../../../domain/usecases/article/CreateArticle.usecase';
import { UpdateArticleUseCase } from '../../../../domain/usecases/article/UpdateArticle.usecase';
import { GetAllArticlesUseCase } from '../../../../domain/usecases/article/GetAllArticles.usecase';
import { CreateArticleDto } from '../../../dtos/createArticle.dto';
import { ArticleModel } from '../../../../domain/model/Article.model';
import { ArticleFactory } from '../../../../domain/usecases/article/article.factory';
import { UpdateArticleDto } from '../../../dtos/updateArticle.dto';
import { GetArticleUsecase } from '../../../../domain/usecases/article/GetArticle.usecase';
import { DeleteArticleUseCase } from '../../../../domain/usecases/article/deleteArticle.usecase';

@Controller('articles')
export class ArticleControllerController {
  constructor(
    @Inject(UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY)
    private readonly createArticleUseCaseProxy: UseCaseProxy<CreateArticleUseCase>,

    @Inject(UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY)
    private readonly updateArticleUseCaseProxy: UseCaseProxy<UpdateArticleUseCase>,

    @Inject(UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY)
    private readonly getAllArticleUseCaseProxy: UseCaseProxy<GetAllArticlesUseCase>,
    private articleFactory: ArticleFactory,

    @Inject(UseCasesProxyModule.GET_ARTICLE_USECASE_PROXY)
    private readonly getArticleUseCase: UseCaseProxy<GetArticleUsecase>,

    @Inject(UseCasesProxyModule.DELETE_ARTICLE_USECASE_PROXY)
    private readonly deleteArticleUseCase: UseCaseProxy<DeleteArticleUseCase>,
  ) {}
  @Get()
  async getArticles() {
    return await this.getAllArticleUseCaseProxy.getInstance().execute();
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

  @Delete(':id')
  async deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteArticleUseCase.getInstance().execute(id);
  }

  @Get(':id')
  async getArtilce(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ArticleModel> {
    return await this.getArticleUseCase.getInstance().execute(id);
  }
}
