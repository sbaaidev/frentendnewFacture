import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitClientComponent } from './produit-client.component';

describe('ProduitClientComponent', () => {
  let component: ProduitClientComponent;
  let fixture: ComponentFixture<ProduitClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
