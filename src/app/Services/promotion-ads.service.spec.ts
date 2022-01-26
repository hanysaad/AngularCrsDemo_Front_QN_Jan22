import { TestBed } from '@angular/core/testing';

import { PromotionAdsService } from './promotion-ads.service';

describe('PromotionAdsService', () => {
  let service: PromotionAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
