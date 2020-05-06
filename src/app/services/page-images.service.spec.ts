import { TestBed } from '@angular/core/testing';

import { PageImagesService } from './page-images.service';

describe('PageImagesService', () => {
  let service: PageImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
