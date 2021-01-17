import { Test } from '@nestjs/testing';
import { AuthServerApplicationService } from './auth-server-application.service';

describe('AuthServerApplicationService', () => {
  let service: AuthServerApplicationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthServerApplicationService],
    }).compile();

    service = module.get(AuthServerApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
