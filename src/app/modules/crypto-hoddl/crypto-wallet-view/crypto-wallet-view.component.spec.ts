import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoWalletViewComponent } from './crypto-wallet-view.component';

describe('CryptoWalletViewComponent', () => {
  let component: CryptoWalletViewComponent;
  let fixture: ComponentFixture<CryptoWalletViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoWalletViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoWalletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
