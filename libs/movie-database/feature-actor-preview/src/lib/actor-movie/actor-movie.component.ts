import { Component, Input } from '@angular/core';
import { Actor, CastMember, Movie } from '@tin/movie-database/domain';

export interface ActorMovie {
  movie: Movie;
  role: string;
}
@Component({
  selector: 'movie-database-actor-movie',
  templateUrl: './actor-movie.component.html',
  styleUrls: ['./actor-movie.component.scss'],
})
export class ActorMovieComponent {
  @Input()
  actorMovie: ActorMovie;
}
