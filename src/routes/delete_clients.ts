import express, { Router } from 'express'
import { Client } from '../entities/Client'

const route = express.Router()
route.delete('api/client/:clientId', async (req, res) => {
  const { clientId } = req.params
  const response = await Client.delete(clientId)
  return res.json(response)
})
export { route as deleteClientRouter }
