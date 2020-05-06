import { TestBed } from '@angular/core/testing';

import { StorageJwtService } from './storage-jwt.service';

describe('StorageJwtService', () => {
  let service: StorageJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
