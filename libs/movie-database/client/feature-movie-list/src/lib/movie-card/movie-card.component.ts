import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Movie, MovieId } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input()
  movie: Movie;
  @Output()
  deleteMovie = new EventEmitter<MovieId>();

  onDelete(): void {
    this.deleteMovie.emit(this.movie.id);
  }
}
