import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
//entities is another name of table :)))
@Entity()
export class Person extends BaseEntity {
  //have to import primary column or else will get error
  @PrimaryColumn({
    type: 'uuid',
  }) //create a constraints
  id: string
  @Column()
  first_name: string
  @Column()
  last_name: string
  @Column({
    unique: true,
  })
  email: string
  @Column({
    unique: true,
    length: 10,
  })
  card_number: string
}
