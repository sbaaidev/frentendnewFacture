import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPhysiqueComponent } from './client-physique.component';

describe('ClientPhysiqueComponent', () => {
  let component: ClientPhysiqueComponent;
  let fixture: ComponentFixture<ClientPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
