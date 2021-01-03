import { CastMemberId } from '../value-objects/cast-member-id.value-object';
import { SerialId } from '../value-objects/serial-id.value-object';

export interface SerialProps {
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  episodesCount: number;
  title: string;
}

export interface SerialRelations {
  actors: CastMemberId[];
}

export interface Serial extends SerialProps, SerialRelations {
  id: SerialId;
}
