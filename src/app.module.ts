import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './infrastructures/repositories/repositories.module';
import { PrismaModule } from './infrastructures/prisma/prisma/prisma.module';
import { UseCasesProxyModule } from './infrastructures/usecasesproxy/usecasesproxy.module';
import { ArticleControllerController } from './infrastructures/REST API/controller/article-controller/article-controller.controller';
import { ArticleFactory } from './domain/usecases/article/article.factory';

@Module({
  imports: [PrismaModule, RepositoriesModule, UseCasesProxyModule.register()],
  controllers: [AppController, ArticleControllerController],
  providers: [AppService, ArticleFactory],
})
export class AppModule {}
