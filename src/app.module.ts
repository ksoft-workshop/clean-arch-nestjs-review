import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './infrastructures/repositories/repositories.module';
import { PrismaModule } from './infrastructures/prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule, RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
