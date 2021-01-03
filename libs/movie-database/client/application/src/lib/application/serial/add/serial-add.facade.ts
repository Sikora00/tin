import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SerialAddPresenterInterface} from './serial-add-presenter.interface';
import {createAddSerialForm, SerialAddEditForm} from '../add-edit/serial-add-edit.form';
import {Router} from '@angular/router';
import {SerialDataService} from "../../../infrastructure/serial/serial.data.service";
import {ActorDataService} from "../../../infrastructure/actor/actor.data.service";
import {SerialAddEditFacade} from "../add-edit/serial-add-edit.facade";

@Injectable()
export class SerialAddFacade extends SerialAddEditFacade {
  constructor(
    protected fb: FormBuilder,
    private actorDataService: ActorDataService,
    private serialDataService: SerialDataService,
    private router: Router
  ) {
    super(fb)
  }

  async init(presenter: SerialAddPresenterInterface): Promise<void> {
    presenter.displayLoading();
    const actors = await this.actorDataService.load();
    presenter.displayForm(createAddSerialForm(this.fb), actors);
  }

  async onSubmit(form: SerialAddEditForm): Promise<void> {
    if (form.valid) {
      const serial = await this.serialDataService
        .addSerial({
          ...form.value,
          actors: form.value.actors.map((actorValue) => ({
            ...actorValue,
            actor: +actorValue.actor,
          })),
        })
        .toPromise()
        .then();
      await this.router.navigate(['movie-database', 'serial', serial.id]);
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }
}
