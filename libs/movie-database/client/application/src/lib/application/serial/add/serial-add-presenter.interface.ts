import { SerialAddEditForm } from '../add-edit/serial-add-edit.form';
import { Observable } from 'rxjs';
import { Actor } from '@tin/movie-database/domain';

export interface SerialAddPresenterInterface {
  displayLoading(): void;
  displayForm(form: SerialAddEditForm, actors: Observable<Actor[]>): void;
}
