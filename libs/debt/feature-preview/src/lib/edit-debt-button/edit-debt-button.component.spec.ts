import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDebtButtonComponent } from './edit-debt-button.component';

describe('EditDebtButtonComponent', () => {
  let component: EditDebtButtonComponent;
  let fixture: ComponentFixture<EditDebtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDebtButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDebtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
