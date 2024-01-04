const router = require('express').Router()
 const ActorController = require('../controllers/ActorController')


router.post('/', ActorController.create) 
router.get('/', ActorController.getAll)


// router.post('/', (req, res) => {
//     res.send(req.body)
// })


module.exports = router