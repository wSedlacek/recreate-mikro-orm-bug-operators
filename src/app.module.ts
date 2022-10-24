import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import config from '../mikro-orm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataEntity } from './data.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...config,
      entities: undefined,
      allowGlobalContext: true,
      autoLoadEntities: true,
    }),
    MikroOrmModule.forFeature([DataEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
