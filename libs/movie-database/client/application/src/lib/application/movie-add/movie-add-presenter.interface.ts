import { AddMovieForm } from './add-movie-form';
import { Observable } from 'rxjs';
import { Actor } from '@tin/movie-database/domain';

export interface MovieAddPresenterInterface {
  displayLoading(): void;
  displayForm(form: AddMovieForm, actors: Observable<Actor[]>): void;
}
