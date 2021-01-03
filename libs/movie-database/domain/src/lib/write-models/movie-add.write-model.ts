import {MovieProps} from '../entities/movie';
import {CastMemberWriteModel} from "./cast-member.write-model";

export interface MovieAddWriteModel extends MovieProps {
  actors: CastMemberWriteModel[];
}
