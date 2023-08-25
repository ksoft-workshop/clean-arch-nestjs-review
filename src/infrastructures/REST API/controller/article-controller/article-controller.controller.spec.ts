import { Test, TestingModule } from '@nestjs/testing';
import { ArticleControllerController } from './article-controller.controller';

describe('ArticleControllerController', () => {
  let controller: ArticleControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleControllerController],
    }).compile();

    controller = module.get<ArticleControllerController>(
      ArticleControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
