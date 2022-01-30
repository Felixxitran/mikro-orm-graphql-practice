import express from 'express'
import { Client } from '../entities/Client'

const router = express.Router()

router.post('./api/banker', async (req, res) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body
  const client = Client.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    card_number: cardNumber,
    balance: balance,
  })
  await client.save()
  return res.json(client)
})

export { router as createClientRouter }
