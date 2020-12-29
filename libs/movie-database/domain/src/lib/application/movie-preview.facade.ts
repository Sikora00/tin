import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actor } from '../..';

export interface MoviePreview {
  id: number;
  thumbnailUrl: string;
  releaseDate: Date;
  title: string;
  description: string;
  cast: { id: number; role: string; actor: Actor }[];
}
@Injectable({ providedIn: 'root' })
export class MoviePreviewFacade {}
