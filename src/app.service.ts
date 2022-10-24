import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/sqlite';

import { DataEntity } from './data.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(DataEntity)
    private readonly data: EntityRepository<DataEntity>,
  ) {}

  public getData() {
    return this.data.findAll();
  }

  public async onModuleInit() {
    const data1 = this.data.create({ name: 'data1' });

    this.data.persistAndFlush(data1);
  }
}
