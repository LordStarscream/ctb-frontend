import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoReportViewComponent } from './crypto-report-view.component';

describe('CryptoReportViewComponent', () => {
  let component: CryptoReportViewComponent;
  let fixture: ComponentFixture<CryptoReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoReportViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
