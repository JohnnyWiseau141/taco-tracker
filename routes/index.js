import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.redirect('/tacos')
})

export {
  router
}