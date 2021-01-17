import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMainNavbarComponent } from './tin-main-navbar.component';

describe('TinMainNavbarComponent', () => {
  let component: TinMainNavbarComponent;
  let fixture: ComponentFixture<TinMainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TinMainNavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
