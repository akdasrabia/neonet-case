const Movie = require('../models/movieModel')
const Category = require('../models/categoryModel')
const Actor = require('../models/actorModel')

exports.create = async (req, res) => {
    try {
        const _created = await Actor.create(req.body)
        res.status(200).json(_created)

        // await movie.save().then((res ) => {
        //     return res.status(201).json(movie)
        // }).catch(err => {
        //     return res.status(500).json({message: err.message})
        // }) 


    }catch(err) {
        res.status(400).json({message: err.message})
    }

}


exports.getAll = async (req, res) => {
    

    try {
        const actors = await Actor.find({}, {name: 1, _id: 1 })



        res.status(200).json(actors)


    }catch(err) {
        res.status(400).json({message: err.message})
    }

}