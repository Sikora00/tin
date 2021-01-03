import {SerialProps} from '../entities/serial';
import {CastMemberWriteModel} from "./cast-member.write-model";

export interface SerialAddWriteModel extends SerialProps {
  actors: CastMemberWriteModel[];
}
