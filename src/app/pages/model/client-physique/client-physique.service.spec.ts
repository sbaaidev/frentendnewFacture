import { TestBed } from '@angular/core/testing';

import { ClientPhysiqueService } from './client-physique.service';

describe('ClientPhysiqueService', () => {
  let service: ClientPhysiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPhysiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
