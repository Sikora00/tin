import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Movie, MovieProps } from '@tin/movie-database/domain';
import { CastMember } from '@tin/movie-database/domain';
import { formatDate } from '@angular/common';

export interface EditMovieForm extends FormGroup {
  controls: {
    [P in keyof MovieProps]: AbstractControl;
  } & { actors: FormArray };

  value: MovieProps & { actors: { actor: string; role: string }[] };
}

export function createEditMovieForm(
  fb: FormBuilder,
  movie: Movie,
  castMembers: CastMember[]
): EditMovieForm {
  return fb.group({
    title: [movie.title, Validators.required],
    thumbnailUrl: [movie.thumbnailUrl, Validators.required],
    releaseDate: [
      formatDate(movie.releaseDate, 'yyyy-MM-dd', 'en'),
      Validators.required,
    ],
    description: [movie.description, Validators.required],
    actors: fb.array(
      movie.actors.map((castMemberId) => {
        const castMember = castMembers.find((c) => c.id === castMemberId);
        return fb.group({
          actor: [castMember.actor, Validators.required],
          role: [castMember.role, Validators.required],
        });
      })
    ),
  }) as EditMovieForm;
}
