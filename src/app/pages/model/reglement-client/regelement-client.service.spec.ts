import { TestBed } from '@angular/core/testing';

import { RegelementClientService } from './regelement-client.service';

describe('RegelementClientService', () => {
  let service: RegelementClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegelementClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
