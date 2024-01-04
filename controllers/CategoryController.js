const Movie = require('../models/movieModel')
const Category = require('../models/categoryModel')
const Actor = require('../models/actorModel')

exports.create = async (req, res) => {
    const {name} = req.body
    try {
        const _created = await Category.create(req.body)
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
        const categories = await Category.find({}, {name: 1, _id: 1 })



        res.status(200).json(categories)


    }catch(err) {
        res.status(400).json({message: err.message})
    }

}