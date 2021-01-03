import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {SerialEditPresenterInterface} from './serial-edit-presenter.interface';
import {SerialId} from '@tin/movie-database/domain';
import {of} from 'rxjs';
import {SerialAddEditFacade} from "../add-edit/serial-add-edit.facade";
import {SerialDataService} from "../../../infrastructure/serial/serial.data.service";
import {ActorDataService} from "../../../infrastructure/actor/actor.data.service";
import {CastMemberDataService} from "../../../infrastructure/cast-member.data.service";
import {createEditSerialForm, SerialAddEditForm} from "../add-edit/serial-add-edit.form";

@Injectable()
export class SerialEditFacade extends SerialAddEditFacade {
  constructor(
    protected fb: FormBuilder,
    private actorDataService: ActorDataService,
    private serialDataService: SerialDataService,
    private castMemberDataService: CastMemberDataService,
    private router: Router
  ) {
    super(fb)
  }

  async init(
    presenter: SerialEditPresenterInterface,
    serialId: SerialId
  ): Promise<void> {
    presenter.displayLoading();
    const [actors, serial] = await Promise.all([
      this.actorDataService.load().toPromise(),
      this.serialDataService.getSingleOnce(serialId).toPromise(),
    ]);
    const castMembers = await Promise.all(
      serial.actors.map((castMemberId) =>
        this.castMemberDataService.loadSingle(castMemberId).toPromise()
      )
    );
    presenter.displayForm(
      createEditSerialForm(this.fb, serial, castMembers),
      of(actors)
    );
  }

  async onSubmit(form: SerialAddEditForm, serialId: SerialId): Promise<void> {
    if (form.valid) {
      await this.serialDataService
        .editSerial(serialId, {
          ...form.value,
          actors: form.value.actors.map((actorValue) => ({
            ...actorValue,
            actor: +actorValue.actor,
          })),
        })
        .toPromise()
        .then();
      await this.router.navigate(['movie-database', 'serial', serialId]);
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }
}
