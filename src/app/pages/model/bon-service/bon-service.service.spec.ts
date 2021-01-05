import { TestBed } from '@angular/core/testing';

import { BonServiceService } from './bon-service.service';

describe('BonServiceService', () => {
  let service: BonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
