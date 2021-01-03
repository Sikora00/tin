import { Observable } from 'rxjs';
import {SerialPreviewReadModel} from "./serial-preview.read-model";

export interface SerialPreviewPresenter {
  displayLoading(): void;

  displayPreview(data: Observable<SerialPreviewReadModel>): void;
}
