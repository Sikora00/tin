import { EditMovieForm } from './edit-movie-form';
import { Observable } from 'rxjs';
import { Actor } from '@tin/movie-database/domain';

export interface MovieEditPresenterInterface {
  displayLoading(): void;
  displayForm(form: EditMovieForm, actors: Observable<Actor[]>): void;
}
