import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialAddEditComponent } from './serial-add-edit.component';

describe('SerialAddEditComponent', () => {
  let component: SerialAddEditComponent;
  let fixture: ComponentFixture<SerialAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialAddEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
