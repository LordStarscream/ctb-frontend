import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoImportEntryComponent } from './crypto-import-entry.component';

describe('CryptoReportComponent', () => {
  let component: CryptoImportEntryComponent;
  let fixture: ComponentFixture<CryptoImportEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoImportEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoImportEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
