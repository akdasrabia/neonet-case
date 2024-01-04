const router = require('express').Router()
 const MovieController = require('../controllers/MovieController')


router.post('/', MovieController.createMovie) 
router.get('/', MovieController.getAllMovie)

router.get('/find', MovieController.getMoviesByCategory)


// router.post('/', (req, res) => {
//     res.send(req.body)
// })


module.exports = router