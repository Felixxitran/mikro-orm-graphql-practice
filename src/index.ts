import { createConnection } from 'typeorm'

const init = async () => {
  //use typeorm to connect postgresql
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'khoatran',
    password: undefined,
    database: 'typeorm',
  })
}
init()
