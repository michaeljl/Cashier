import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierDetailsComponent } from './cashier-details.component';

describe('CashierDetailsComponent', () => {
  let component: CashierDetailsComponent;
  let fixture: ComponentFixture<CashierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
