import { Test } from '@nestjs/testing';
import { AuthServerUiRestController } from './auth-server-ui-rest.controller';

describe('AuthServerUiRestController', () => {
  let controller: AuthServerUiRestController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [AuthServerUiRestController],
    }).compile();

    controller = module.get(AuthServerUiRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
