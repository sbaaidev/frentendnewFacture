import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonServiceComponent } from './bon-service.component';

describe('BonServiceComponent', () => {
  let component: BonServiceComponent;
  let fixture: ComponentFixture<BonServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
