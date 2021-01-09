import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tin',
      password: 'mysecretpassword',
      database: 'tin',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppCoreModule {}
