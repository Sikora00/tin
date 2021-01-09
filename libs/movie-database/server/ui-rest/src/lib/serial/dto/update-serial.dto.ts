import { CreateSerialDto } from './create-serial.dto';
import { SerialEditWriteModel } from '@tin/movie-database/domain';

export class UpdateSerialDto
  extends CreateSerialDto
  implements SerialEditWriteModel {}
