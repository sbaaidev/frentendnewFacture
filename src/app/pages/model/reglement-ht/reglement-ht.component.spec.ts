import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementHTComponent } from './reglement-ht.component';

describe('ReglementHTComponent', () => {
  let component: ReglementHTComponent;
  let fixture: ComponentFixture<ReglementHTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementHTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementHTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
