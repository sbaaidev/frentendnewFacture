import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMoraleComponent } from './client-morale.component';

describe('ClientMoraleComponent', () => {
  let component: ClientMoraleComponent;
  let fixture: ComponentFixture<ClientMoraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMoraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
