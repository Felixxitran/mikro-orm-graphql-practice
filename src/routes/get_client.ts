import express from 'express'
import { Client } from '../entities/Client'
import { createQueryBuilder } from 'typeorm' //query
const route = express.Router()
route.get('./api/clients', async (req, res) => {
  //return all the clients
  const client = await createQueryBuilder('client')
    .select('client.first_name,client.last_name')
    .from(Client, 'client')
    .where('client.id = :clientId', { clientId: 3 })
    .getOne()
  return res.send(client)
})

export { route as getBankersRouter }
