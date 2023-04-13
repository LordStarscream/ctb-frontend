import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddlLayoutComponent } from './hoddl-layout.component';

describe('HoddlLayoutComponent', () => {
  let component: HoddlLayoutComponent;
  let fixture: ComponentFixture<HoddlLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddlLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
