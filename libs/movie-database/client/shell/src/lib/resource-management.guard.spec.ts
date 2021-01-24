import { TestBed } from '@angular/core/testing';

import { ResourceManagementGuard } from './resource-management.guard';

describe('ResourceManagementGuard', () => {
  let guard: ResourceManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResourceManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
