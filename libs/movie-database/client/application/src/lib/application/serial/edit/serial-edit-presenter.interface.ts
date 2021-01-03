import {Observable} from 'rxjs';
import {Actor} from '@tin/movie-database/domain';
import {SerialAddEditForm} from "../add-edit/serial-add-edit.form";

export interface SerialEditPresenterInterface {
  displayLoading(): void;
  displayForm(form: SerialAddEditForm, actors: Observable<Actor[]>): void;
}
