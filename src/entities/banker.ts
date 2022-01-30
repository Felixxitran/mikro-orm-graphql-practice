import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  TreeLevelColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm'
import { Client } from './Client'
import { Person } from './utils/Person'
//entities is another name of table :)))
@Entity('Banker')
export class Banker extends Person {
  //have to import primary column or else will get error

  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string
  //create new table with client and bankers relationships
  @ManyToMany(() => Client)
  @JoinTable({
    name: 'Bankers_to_Clients',
    joinColumn: {
      name: 'Banker',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'Client',
      referencedColumnName: 'id',
    },
  })
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
