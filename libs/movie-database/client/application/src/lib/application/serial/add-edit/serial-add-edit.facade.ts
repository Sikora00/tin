import { FormBuilder, Validators } from '@angular/forms';
import { SerialAddEditForm } from '../add-edit/serial-add-edit.form';

export abstract class SerialAddEditFacade {
  constructor(protected fb: FormBuilder) {}

  addActor(form: SerialAddEditForm): void {
    form.controls.actors.push(
      this.fb.group({
        actor: [null, Validators.required],
        role: [null, Validators.required],
      })
    );
  }

  removeActor(form: SerialAddEditForm, index: number): void {
    form.controls.actors.removeAt(index);
  }
}
