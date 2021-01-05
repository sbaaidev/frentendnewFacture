import { TestBed } from '@angular/core/testing';

import { RegelementFoursnisseurService } from './regelement-foursnisseur.service';

describe('RegelementFoursnisseurService', () => {
  let service: RegelementFoursnisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegelementFoursnisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
