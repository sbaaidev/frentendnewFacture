import { TestBed } from '@angular/core/testing';

import { RegelementHtService } from './regelement-ht.service';

describe('RegelementHtService', () => {
  let service: RegelementHtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegelementHtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
