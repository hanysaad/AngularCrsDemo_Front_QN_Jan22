import { TestBed } from '@angular/core/testing';

import { StaticProductsService } from './static-products.service';

describe('StaticProductsService', () => {
  let service: StaticProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
