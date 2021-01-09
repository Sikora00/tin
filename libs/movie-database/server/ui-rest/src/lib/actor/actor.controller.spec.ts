import { Test, TestingModule } from '@nestjs/testing';
import { ActorController } from './actor.controller';
import { ActorService } from '../../../../application/src/lib/actor.service';

describe('ActorController', () => {
  let controller: ActorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorController],
      providers: [ActorService],
    }).compile();

    controller = module.get<ActorController>(ActorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
