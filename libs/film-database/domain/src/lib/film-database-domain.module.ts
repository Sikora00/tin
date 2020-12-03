import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmEffects } from './+state/film/film.effects';
import * as fromFilm from './+state/film/film.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActorEffects } from './+state/actor/actor.effects';
import * as fromActor from './+state/actor/actor.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFilm.FILM_FEATURE_KEY, fromFilm.reducer),
    EffectsModule.forFeature([FilmEffects]),
    StoreModule.forFeature(fromActor.ACTOR_FEATURE_KEY, fromActor.reducer),
    EffectsModule.forFeature([ActorEffects]),
  ],
})
export class FilmDatabaseDomainModule {}
