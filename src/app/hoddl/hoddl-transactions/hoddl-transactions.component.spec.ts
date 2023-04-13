import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddlTransactionsComponent } from './hoddl-transactions.component';

describe('HoddlTransactionsComponent', () => {
  let component: HoddlTransactionsComponent;
  let fixture: ComponentFixture<HoddlTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddlTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddlTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
