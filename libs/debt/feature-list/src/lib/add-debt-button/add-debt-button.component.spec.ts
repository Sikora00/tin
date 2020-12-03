import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebtButtonComponent } from './add-debt-button.component';

describe('AddDebtButtonComponent', () => {
  let component: AddDebtButtonComponent;
  let fixture: ComponentFixture<AddDebtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDebtButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDebtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
