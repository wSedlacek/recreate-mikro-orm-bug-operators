import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/sqlite';

import { DataEntity } from './data.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(DataEntity)
    private readonly data: EntityRepository<DataEntity>,
  ) {}

  public getData() {
    // return this.data.findAll();
    return this.data.findAll({ having: { removedAt: null } });
  }
}
