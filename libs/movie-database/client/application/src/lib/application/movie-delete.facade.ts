import { Injectable } from '@angular/core';
import { MovieId } from '@tin/movie-database/domain';
import { MovieDataService } from '../infrastructure/movie/movie.data.service';

@Injectable()
export class MovieDeleteFacade {
  constructor(private movieDataService: MovieDataService) {}

  async deleteMovie(movieId: MovieId): Promise<void> {
    await this.movieDataService.deleteMovie(movieId).toPromise();
  }
}
