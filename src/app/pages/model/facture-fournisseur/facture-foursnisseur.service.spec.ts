import { TestBed } from '@angular/core/testing';

import { FactureFoursnisseurService } from './facture-foursnisseur.service';

describe('FactureFoursnisseurService', () => {
  let service: FactureFoursnisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureFoursnisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
