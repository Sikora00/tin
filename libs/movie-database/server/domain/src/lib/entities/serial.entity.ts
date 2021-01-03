import {CastMemberId, Serial, SerialAddWriteModel, SerialEditWriteModel, SerialId,} from '@tin/movie-database/domain';

export class SerialEntity implements Serial {
  actors: CastMemberId[];
  description: string;
  episodesCount: number;
  id: SerialId;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;

  static create(payload: SerialAddWriteModel): Serial {
    const serial = new SerialEntity();
    serial.title = payload.title;
    serial.description = payload.description;
    serial.episodesCount = payload.episodesCount;
    serial.releaseDate = payload.releaseDate;
    serial.thumbnailUrl = payload.thumbnailUrl;
    return serial;
  }

  update(payload: SerialEditWriteModel): void {
    this.title = payload.title;
    this.description = payload.description;
    this.episodesCount = payload.episodesCount;
    this.releaseDate = payload.releaseDate;
    this.thumbnailUrl = payload.thumbnailUrl;
  }
}
