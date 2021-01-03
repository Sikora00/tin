import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CastMemberEntity } from '@tin/movie-database/server/domain';
import { CastMemberSchema } from '../../../../infrastructure-typeorm/src/lib/schema/cast-member.schema';
import {
  ActorId,
  ActorWithMoviesReadModel,
  ActorAddWriteModel,
  ActorEditWriteModel,
  MovieId,
} from '@tin/movie-database/domain';
import { ActorSchema } from '../../../../infrastructure-typeorm/src/lib/schema/actor.schema';
import { ActorEntity } from '../../../../domain/src/lib/entities/actor.entity';

@Injectable()
export class ActorService {
  constructor(
    private connection: Connection,
    @InjectRepository(ActorSchema)
    private actorRepository: Repository<ActorEntity>,
    @InjectRepository(CastMemberSchema)
    private castMemberRepository: Repository<CastMemberEntity>
  ) {}

  async create(payload: ActorAddWriteModel): Promise<ActorWithMoviesReadModel> {
    const actor = await this.actorRepository.save(ActorEntity.create(payload));
    return this.findOne(actor.id);
  }

  findAll(): Promise<ActorWithMoviesReadModel[]> {
    return this.actorRepository.find({ relations: ['movies'] }) as any;
  }

  async findOne(id: ActorId): Promise<ActorWithMoviesReadModel> {
    return this.actorRepository.findOneOrFail(id, {
      relations: ['movies', 'serials'],
    }) as any;
  }

  async update(
    id: ActorId,
    updatePayload: ActorEditWriteModel
  ): Promise<ActorWithMoviesReadModel> {
    const actor = await this.actorRepository.findOneOrFail(id);
    actor.update(updatePayload);
    await this.actorRepository.save(actor);
    return this.findOne(id);
  }

  remove(id: MovieId): Promise<void> {
    return this.actorRepository.delete(id).then();
  }
}
