import Koa from 'koa'

import { SERVER_PORT } from './env'
import playground from './db'

export const app = new Koa()

export const startServer = async () => {
  await playground.init()
  await app.listen(SERVER_PORT)
  console.log(`Server running on port: ${SERVER_PORT} ( http://localhost:${SERVER_PORT}/ )`) // eslint-disable-line no-console
}

export default startServer
