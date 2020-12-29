export interface Movie {
  id: number;
  castMemberIds: number[];
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;
}
