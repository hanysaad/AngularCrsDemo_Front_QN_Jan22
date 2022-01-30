import { TestBed } from '@angular/core/testing';

import { GenericAPIHandlerService } from './generic-apihandler.service';

describe('GenericAPIHandlerService', () => {
  let service: GenericAPIHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericAPIHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
