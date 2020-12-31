import { Injectable } from '@angular/core';
import { MovieId } from '../domain/value-objects/movie-id.value-object';
import { MovieDataService } from '../infrastructure/movie/movie.data.service';

@Injectable()
export class MovieDeleteFacade {
  constructor(private movieDataService: MovieDataService) {}

  async deleteMovie(movieId: MovieId): Promise<void> {
    await this.movieDataService.deleteMovie(movieId).toPromise();
  }
}
