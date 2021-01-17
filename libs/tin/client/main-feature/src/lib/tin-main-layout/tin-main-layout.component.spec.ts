import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMainLayoutComponent } from './tin-main-layout.component';

describe('TinMainLayoutComponent', () => {
  let component: TinMainLayoutComponent;
  let fixture: ComponentFixture<TinMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TinMainLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
