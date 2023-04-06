import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoHODLScreenComponent } from './crypto-hodlscreen.component';

describe('CryptoHODLScreenComponent', () => {
  let component: CryptoHODLScreenComponent;
  let fixture: ComponentFixture<CryptoHODLScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoHODLScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoHODLScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
