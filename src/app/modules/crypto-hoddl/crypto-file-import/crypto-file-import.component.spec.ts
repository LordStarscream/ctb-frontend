import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFileImportComponent } from './crypto-file-import.component';

describe('CryptoFileImportComponent', () => {
  let component: CryptoFileImportComponent;
  let fixture: ComponentFixture<CryptoFileImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoFileImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoFileImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
