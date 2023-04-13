import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddlReportTransactionsComponent } from './hoddl-report-transactions.component';

describe('HoddlReportTransactionsComponent', () => {
  let component: HoddlReportTransactionsComponent;
  let fixture: ComponentFixture<HoddlReportTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddlReportTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddlReportTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
