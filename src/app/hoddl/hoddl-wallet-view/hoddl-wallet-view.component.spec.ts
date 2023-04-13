import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddlWalletViewComponent } from './hoddl-wallet-view.component';

describe('HoddlWalletViewComponent', () => {
  let component: HoddlWalletViewComponent;
  let fixture: ComponentFixture<HoddlWalletViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddlWalletViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddlWalletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
