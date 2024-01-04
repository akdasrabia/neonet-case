const Movie = require('../models/movieModel')
const Category = require('../models/categoryModel')
const Actor = require('../models/actorModel')

exports.createMovie = async (req, res) => {
    const {title, year, poster, description, isPopular, isRecommended, duration, releaseDate, averageRating, categories, actors, type} = req.body
    try {
        const movie = new Movie({
            title: title,
            description: description,
            year: year,
            poster: poster,
            isPopular: isPopular,
            isRecommended: isRecommended,
            releaseDate: releaseDate,
            duration: duration,
            averageRating: averageRating,
            actors: actors,
            type: type
        })

       
        const _created = await Movie.create(movie)
        for (const element of categories) {
            let doc = await Category.findOne({ name: element.toLocaleLowerCase() });
            if(doc != null)
            {
                console.log(element + " "  + doc._id);
                 doc.movies.push(_created._id)
                _created.categories.push(doc._id)
                doc.save()
            }
            else {
                var newCategory = await Category.create({name: element})
                newCategory.movies.push(_created._id)
                _created.categories.push(newCategory._id)
                newCategory.save()
            }
        }
        _created.save();
         res.status(200).json(_created)
    }catch(err) {
        res.status(400).json({message: err.message})
    }

}
exports.getAllMovie = async (req, res) => {
    try {
        const movies = await Movie.find({}, {title: 1, _id: 1, title:1, year: 1, poster: 1, duration: 1, releaseDate: 1, averageRating: 1 })
        res.status(200).json(movies)
    }catch(err) {
        res.status(400).json({message: err.message})
    }
}

exports.getMoviesByCategory = async (req, res) => {
    console.log(req.query)
    const categories = req.query.categories ? JSON.parse(req.query.categories) : [];
    var movies = []
    for (const element of categories) {
        let doc = await Category.findOne({ name: element.toLocaleLowerCase() }).populate({path: 'movies', select: 'title year poster averageRating'});
        if(doc != null) {
            const uniqueMovies = doc.movies.filter(movie => !movies.some(existingMovie => existingMovie._id.toString() === movie._id.toString()));
            movies.push(...uniqueMovies);
        }
    }
    res.json(movies)
}