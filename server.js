import Koa from 'koa'
import mount from 'koa-mount'
import views from 'koa-views'

import { SERVER_PORT, PROJECT_PATH } from './config/env'
import playground from './db'
import routes from './routes'

export const app = new Koa()

app.use(views(`${PROJECT_PATH}/views`, { extension: 'ect' }))

Object.values(routes)
  .forEach(route => {
    app.use(mount(route))
  })

export const startServer = async () => {
  await playground.init()
  await app.listen(SERVER_PORT)
  console.log(`Server running on port: ${SERVER_PORT} ( http://localhost:${SERVER_PORT}/ )`) // eslint-disable-line no-console
}

export default startServer
