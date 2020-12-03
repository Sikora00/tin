import { CastMember } from './cast-member';

export interface Film {
  id: number;
  cast: CastMember[];
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;
}
