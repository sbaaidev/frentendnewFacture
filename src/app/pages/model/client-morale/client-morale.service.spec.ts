import { TestBed } from '@angular/core/testing';

import { ClientMoraleService } from './client-morale.service';

describe('ClientMoraleService', () => {
  let service: ClientMoraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientMoraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
