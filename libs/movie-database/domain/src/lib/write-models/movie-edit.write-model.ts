import { MovieProps } from '../entities/movie';
import { CastMemberWriteModel } from './cast-member.write-model';

export interface MovieEditWriteModel extends MovieProps {
  actors: CastMemberWriteModel[];
}
