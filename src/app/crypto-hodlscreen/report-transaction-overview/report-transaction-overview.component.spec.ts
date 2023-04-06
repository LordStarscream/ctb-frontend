import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTransactionOverviewComponent } from './report-transaction-overview.component';

describe('ReportTransactionOverviewComponent', () => {
  let component: ReportTransactionOverviewComponent;
  let fixture: ComponentFixture<ReportTransactionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTransactionOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTransactionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
