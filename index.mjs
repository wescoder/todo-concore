import startServer from './server'
import { NODE_ENV } from './env'

if (!['test'].includes(NODE_ENV)) {
  startServer()
}
