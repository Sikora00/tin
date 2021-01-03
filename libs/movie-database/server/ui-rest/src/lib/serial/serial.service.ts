import { Injectable } from '@nestjs/common';
import { UpdateSerialDto } from './dto/update-serial.dto';
import {Connection, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SerialCastMemberEntity, SerialEntity } from '@tin/movie-database/server/domain';
import { SerialSchema } from 'libs/movie-database/server/infrastructure-typeorm/src/lib/schema/serial.schema';
import {Serial, SerialAddWriteModel, SerialId, SerialWithActorsReadModel} from '@tin/movie-database/domain';
import { SerialCastMemberSchema } from 'libs/movie-database/server/infrastructure-typeorm/src/lib/schema/serial-cast-member.schema';

@Injectable()
export class SerialService {
  constructor(
    private connection: Connection,
    @InjectRepository(SerialSchema)
    private serialRepository: Repository<SerialEntity>,
    @InjectRepository(SerialCastMemberSchema)
    private serialCastMemberRepository: Repository<SerialCastMemberEntity>
  ) {}

  async create(
    addSerialWriteModel: SerialAddWriteModel
  ): Promise<SerialWithActorsReadModel> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    let serial = SerialEntity.create(addSerialWriteModel);
    serial = await queryRunner.manager.save(serial);

    let actors = addSerialWriteModel.actors.map(({ actor, role }) =>
      SerialCastMemberEntity.create(actor, serial.id, role)
    );
    actors = await queryRunner.manager.save(actors);

    await queryRunner.commitTransaction();
    return { ...serial, actors };
  }

  findAll(): Promise<Serial[]> {
    return this.serialRepository.find({ relations: ['actors'] });
  }

  async findOne(id: SerialId): Promise<Serial> {
    return this.serialRepository.findOneOrFail(id, { relations: ['actors'] });
  }

  async update(id: SerialId, updateSerialDto: UpdateSerialDto) {
    const serial = await this.serialRepository.findOneOrFail(id);
    serial.update(updateSerialDto);
    await this.serialRepository.save(serial);

    await this.serialCastMemberRepository.delete({ serial: id });
    let actors = updateSerialDto.actors.map(({ actor, role }) =>
      SerialCastMemberEntity.create(actor, id, role)
    );
    actors = await this.serialCastMemberRepository.save(actors);

    return { ...serial, actors };
  }

  remove(id: SerialId): Promise<void> {
    return this.serialRepository.delete(id).then();
  }
}
