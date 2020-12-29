import { Injectable } from '@angular/core';
import { Movie } from '../entities/movie';

export interface ActorPreview {
  id: number;
  name: string;
  thumbnailUrl: string;
  biography: string;
  movies: { id: number; movie: Omit<Movie, 'castMemberIds'> }[];
}
@Injectable({ providedIn: 'root' })
export class ActorPreviewFacade {}
