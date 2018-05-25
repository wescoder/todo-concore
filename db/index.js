import Auth from 'concore-sdk-js/lib/node/Datacore/Auth'
import Concore from 'concore-sdk-js/lib/node'

import { APP_ID, APP_KEY, CONCORE_ADMIN_USER, CONCORE_ADMIN_PASSWORD } from '../env'
import models from '../models'

export const init = async () => {
  Concore.init('https://api.concore.io/api', APP_ID, APP_KEY)
  await Auth.login(CONCORE_ADMIN_USER, CONCORE_ADMIN_PASSWORD)
    .catch(e => { console.error(e) })

  await Promise.all(
    Object.values(models)
      .map(async (model) => {
        await model.save()
          .catch(e => { console.error(e) })
      })
  )
  await Auth.logout()
    .catch(e => { console.error(e) })
}

export default {
  init
}
