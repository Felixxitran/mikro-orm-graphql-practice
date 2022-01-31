import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm'
import { Person } from './utils/Person'
import { Transaction } from './Transaction'
import { Banker } from './banker'
//entities is another name of table :)))
@Entity('Client')
export class Client extends Person {
  //have to import primary column or else will get error
  @Column({
    type: 'numeric',
  })
  balance: number
  @Column({
    default: true,
    name: 'active',
  })
  is_active: boolean
  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number
    hair_color: string
  }
  @Column({
    type: 'simple-array',
    default: [],
  })
  family_members: string[]
  //creating relationships
  @OneToMany(() => Transaction, (transaction) => transaction.client) //one client many transactions
  transactions: Transaction[]
  @ManyToMany(() => Banker) // many clients with many bankers
  bankers: Banker[]
  //creating date column
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
