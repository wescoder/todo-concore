import Koa from 'koa'
import Router from 'koa-router'

export const app = new Koa()

export const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', { name: 'world' })
  await next()
})

app.use(router.allowedMethods())
app.use(router.routes())

export default app
