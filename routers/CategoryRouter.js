const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController.js')


router.post('/', CategoryController.create) 
router.get('/', CategoryController.getAll)


// router.post('/', (req, res) => {
//     res.send(req.body)
// })


module.exports = router