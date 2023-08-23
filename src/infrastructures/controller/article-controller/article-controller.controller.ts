import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Put,
} from '@nestjs/common';
import { UseCasesProxyModule } from '../../usecasesproxy/usecasesproxy.module';
import { UseCaseProxy } from '../../usecasesproxy/usecase.proxy';
import { CreateArticleUseCase } from '../../../application/usecases/CreateArticle.usecase';
import { UpdateArticleUseCase } from '../../../application/usecases/UpdateArticle.usecase';
import { GetAllArticlesUseCase } from '../../../application/usecases/GetAllArticles.usecase';
import { UpdateArticleDto } from '../../dtos/updateArticle.dto';

@Controller('articles')
export class ArticleControllerController {
  constructor(
    @Inject(UseCasesProxyModule.CREATE_ARTICLE_USECASE_PROXY)
    private readonly createArticleUseCaseProxy: UseCaseProxy<CreateArticleUseCase>,

    @Inject(UseCasesProxyModule.UPDATE_ARTICLE_USECASE_PROXY)
    private readonly updateArticleUseCaseProxy: UseCaseProxy<UpdateArticleUseCase>,

    @Inject(UseCasesProxyModule.GET_ALL_ARTICLE_USECASE_PROXY)
    private readonly getArticleUseCaseProxy: UseCaseProxy<GetAllArticlesUseCase>,
  ) {}
  @Get('/')
  async getArticles() {
    const articles = await this.getArticleUseCaseProxy.getInstance().execute();
    return articles;
  }
}
