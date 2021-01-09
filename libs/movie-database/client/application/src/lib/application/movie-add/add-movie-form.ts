import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieProps } from '@tin/movie-database/domain';

export interface AddMovieForm extends FormGroup {
  controls: {
    [P in keyof MovieProps]: AbstractControl;
  } & { actors: FormArray };

  value: MovieProps & { actors: { actor: string; role: string }[] };
}

export function createAddMovieForm(fb: FormBuilder): AddMovieForm {
  return fb.group({
    title: [null, Validators.required],
    thumbnailUrl: [null, Validators.required],
    releaseDate: [null, Validators.required],
    description: [null, Validators.required],
    actors: fb.array([]),
  }) as AddMovieForm;
}
