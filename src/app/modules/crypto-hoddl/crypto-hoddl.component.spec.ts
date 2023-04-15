import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoHoddlComponent } from './crypto-hoddl.component';

describe('CryptoHoddlComponent', () => {
  let component: CryptoHoddlComponent;
  let fixture: ComponentFixture<CryptoHoddlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoHoddlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoHoddlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
