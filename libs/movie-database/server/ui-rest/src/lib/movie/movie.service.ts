import { Injectable } from '@nestjs/common';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  AddMovieWriteModel,
  Movie,
  MovieId,
  MovieWithActorsReadModel,
} from '@tin/movie-database/domain';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieSchema } from '../../../../infrastructure-typeorm/src/lib/schema/movie.schema';
import { Connection, Repository } from 'typeorm';
import {
  CastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';
import { CastMemberSchema } from '../../../../infrastructure-typeorm/src/lib/schema/cast-member.schema';

@Injectable()
export class MovieService {
  constructor(
    private connection: Connection,
    @InjectRepository(MovieSchema)
    private movieRepository: Repository<MovieEntity>,
    @InjectRepository(CastMemberSchema)
    private castMemberRepository: Repository<CastMemberEntity>
  ) {}

  async create(
    addMovieWriteModel: AddMovieWriteModel
  ): Promise<MovieWithActorsReadModel> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    let movie = MovieEntity.create(addMovieWriteModel);
    movie = await queryRunner.manager.save(movie);

    let actors = addMovieWriteModel.actors.map(({ actor, role }) =>
      CastMemberEntity.create(actor, movie.id, role)
    );
    actors = await queryRunner.manager.save(actors);

    await queryRunner.commitTransaction();
    return { ...movie, actors };
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find({ relations: ['actors'] });
  }

  async findOne(id: MovieId): Promise<Movie> {
    return this.movieRepository.findOneOrFail(id, { relations: ['actors'] });
  }

  async update(id: MovieId, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieRepository.findOneOrFail();
    movie.update(updateMovieDto);
    await this.movieRepository.save(movie);

    await this.castMemberRepository.delete({ movie: id });
    let actors = updateMovieDto.actors.map(({ actor, role }) =>
      CastMemberEntity.create(actor, id, role)
    );
    actors = await this.castMemberRepository.save(actors);

    return { ...movie, actors };
  }

  remove(id: MovieId): Promise<void> {
    return this.movieRepository.delete(id).then();
  }
}
