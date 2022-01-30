import { createConnection } from 'typeorm'
import { Client } from './entities/Client'
import { Banker } from './entities/banker'
import { Transaction } from './entities/Transaction'
import express from 'express'
import { appendFile } from 'fs'
import { createECDH } from 'crypto'
import { createClientRouter } from './routes/create_client'
import { createBankerRouter } from './routes/create_banker'
console.log('project successfully initiated')

//first create database in postgresql using typeorm
//second create enitites and relationships in postgresql using typeorm
//create routes to make rest endpoints to post,get data using express
const app = express()
const init = async () => {
  //use typeorm to connect postgresql
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'khoatran',
      password: undefined,
      database: 'typeorm',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    })
    app.use(express.json())
    app.use(createClientRouter)
    app.use(createBankerRouter)
    app.listen(8000, () => {
      console.log('app running on port 8000')
    })
  } catch (error) {
    console.log(error)
  }
}
init()
