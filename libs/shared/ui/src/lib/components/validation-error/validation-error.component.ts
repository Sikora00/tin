import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'tin-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent implements OnInit {
  @Input()
  controlName: string;

  errors$: Observable<string[]>;
  formControl: AbstractControl;

  readonly errorMessages = { required: 'validation.required' };

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    const form: FormGroup = this.controlContainer.control as FormGroup;
    this.formControl = form.get(this.controlName);
    this.errors$ = form.valueChanges.pipe(
      startWith(''),
      map(() =>
        Object.keys(this.formControl.errors || {}).map(
          (key) => this.errorMessages[key] || key
        )
      )
    );
  }
}
