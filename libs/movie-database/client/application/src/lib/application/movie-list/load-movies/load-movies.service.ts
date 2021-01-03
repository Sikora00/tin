import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MovieDataService } from '../../../infrastructure/movie/movie.data.service';
import { MovieStore } from '../../../+state/movie/movie.store';

@Injectable({ providedIn: 'root' })
export class LoadMoviesService {
  constructor(
    private dataService: MovieDataService,
  ) {}

  execute(): Promise<any> {
    return this.dataService
      .load()
      .toPromise();
  }
}
