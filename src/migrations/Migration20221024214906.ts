import { Migration } from '@mikro-orm/migrations';

export class Migration20221024214906 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `data` (`id` integer not null primary key autoincrement, `name` text not null, `removed_at` datetime null);');
  }

}
