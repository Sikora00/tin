import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieEffects } from './+state/movie/movie-effects.service';
import * as fromMovie from './+state/movie/movie.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActorEffects } from './+state/actor/actor.effects';
import * as fromActor from './+state/actor/actor.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovie.MOVIE_FEATURE_KEY, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects]),
    StoreModule.forFeature(fromActor.ACTOR_FEATURE_KEY, fromActor.reducer),
    EffectsModule.forFeature([ActorEffects]),
  ],
})
export class MovieDatabaseDomainModule {}
