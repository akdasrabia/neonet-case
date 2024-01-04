const mongoose = require("mongoose")

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        year: {
            type: Number,
            // required: true,
            default: 0
        },
        poster: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        isPopular : {
            type: Boolean
        },
        isRecommended: {
            type: Boolean
        },
        duration: {
            type: Number
        },
        releaseDate: {
            type: Date
        },
        averageRating: {
            type: Number
        },
        actors: [
            {
              type: String
            },
        ],
        type: {
            type: String // 0 -> movie, 1 -> series
        },
        categories: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Category",
              required: false,
            },
        ],
        actors: [
            {
              type:  String
            },
        ],
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie