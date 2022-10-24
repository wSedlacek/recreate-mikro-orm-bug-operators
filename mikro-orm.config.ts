import { SqliteDriver } from '@mikro-orm/sqlite';

import { DataEntity } from './src/data.entity';

export default {
  driver: SqliteDriver,
  dbName: 'data.sqlite',
  entities: [DataEntity],
};
