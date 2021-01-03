import {SerialProps} from '../entities/serial';
import {CastMemberWriteModel} from "./cast-member.write-model";

export interface SerialEditWriteModel extends SerialProps {
  actors: CastMemberWriteModel[];
}
