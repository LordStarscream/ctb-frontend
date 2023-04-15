import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTransactionViewComponent } from './crypto-transaction-view.component';

describe('CryptoTransactionViewComponent', () => {
  let component: CryptoTransactionViewComponent;
  let fixture: ComponentFixture<CryptoTransactionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTransactionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
