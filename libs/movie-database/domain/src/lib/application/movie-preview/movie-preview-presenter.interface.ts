import { Observable } from 'rxjs';
import { MoviePreview } from './movie-preview.read-model';

export interface MoviePreviewPresenter {
  displayLoading(): void;

  displayPreview(data: Observable<MoviePreview>): void;
}
