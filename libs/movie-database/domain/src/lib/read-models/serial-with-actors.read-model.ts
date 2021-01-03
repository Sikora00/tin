import {SerialCastMember} from '../entities/cast-member';
import {Serial} from "../entities/serial";

export interface SerialWithActorsReadModel extends Omit<Serial, 'actors'> {
  actors: SerialCastMember[];
}
