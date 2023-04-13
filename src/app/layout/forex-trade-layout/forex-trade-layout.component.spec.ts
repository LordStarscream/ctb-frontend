import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexTradeLayoutComponent } from './forex-trade-layout.component';

describe('ForexTradeLayoutComponent', () => {
  let component: ForexTradeLayoutComponent;
  let fixture: ComponentFixture<ForexTradeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexTradeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexTradeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
