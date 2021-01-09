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
  @Input()
  control: AbstractControl;

  readonly errorMessages = { required: 'validation.required' };

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    if (!this.control) {
      this.control = (this.controlContainer.control as FormGroup).get(
        this.controlName
      );
    }
    this.errors$ = this.control.valueChanges.pipe(
      startWith(''),
      map(() =>
        Object.keys(this.control.errors || {}).map(
          (key) => this.errorMessages[key] || key
        )
      )
    );
  }
}
