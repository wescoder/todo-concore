import dotenv from 'dotenv'

dotenv.config()

export const {
  APP_ID,
  APP_KEY,
  NODE_ENV,
  SERVER_PORT,
  CONCORE_ADMIN_USER,
  CONCORE_ADMIN_PASSWORD
} = process.env

export default {
  APP_ID,
  APP_KEY,
  NODE_ENV,
  SERVER_PORT,
  CONCORE_ADMIN_USER,
  CONCORE_ADMIN_PASSWORD
}
