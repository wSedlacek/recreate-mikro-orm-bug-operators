import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'data' })
export class DataEntity {
  @PrimaryKey({ autoincrement: true })
  public id: number;

  @Property()
  public name!: string;

  @Property({ nullable: true, type: 'datetime' })
  public removedAt?: Date;
}
