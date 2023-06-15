import { TestBed } from '@angular/core/testing';

import { AccessTokenDataService } from './access-token-data.service';

describe('AccessTokenDataService', () => {
  let service: AccessTokenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessTokenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
