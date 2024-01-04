const router = require('express').Router()
 const MovieController = require('../controllers/MovieController')


router.post('/', MovieController.createMovie) 
router.get('/', MovieController.getAllMovie)

router.get('/find', MovieController.getMoviesByCategory)


router.get('/main', MovieController.getMoviesMain)

router.get('/:id', MovieController.getMovie)


// router.post('/', (req, res) => {
//     res.send(req.body)
// })


module.exports = router