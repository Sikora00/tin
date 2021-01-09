import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CastMemberWriteModel,
  Serial,
  SerialCastMember,
  SerialProps,
} from '@tin/movie-database/domain';

export interface SerialAddEditForm extends FormGroup {
  controls: {
    [P in keyof SerialProps]: AbstractControl;
  } & { actors: FormArray };

  value: SerialProps & { actors: CastMemberWriteModel[] };
}

export function createAddSerialForm(fb: FormBuilder): SerialAddEditForm {
  return fb.group({
    title: [null, Validators.required],
    thumbnailUrl: [null, Validators.required],
    episodesCount: [null, Validators.required],
    description: [null, Validators.required],
    actors: fb.array([]),
  }) as SerialAddEditForm;
}

export function createEditSerialForm(
  fb: FormBuilder,
  serial: Serial,
  castMembers: SerialCastMember[]
): SerialAddEditForm {
  return fb.group({
    title: [serial.title, Validators.required],
    thumbnailUrl: [serial.thumbnailUrl, Validators.required],
    episodesCount: [serial.episodesCount, Validators.required],
    description: [serial.description, Validators.required],
    actors: fb.array(
      serial.actors.map((castMemberId) => {
        const castMember = castMembers.find((c) => c.id === castMemberId);
        return fb.group({
          actor: [castMember.actor, Validators.required],
          role: [castMember.role, Validators.required],
        });
      })
    ),
  }) as SerialAddEditForm;
}
