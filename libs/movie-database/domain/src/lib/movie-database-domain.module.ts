import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieEffects } from './+state/movie/movie-effects.service';
import * as fromMovie from './+state/movie/movie.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovie.MOVIE_FEATURE_KEY, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MovieDatabaseDomainModule {}
