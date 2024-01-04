const mongoose = require("mongoose")

const actorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // required: [true, "Please enter a product name" ]
        },

        movies: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Movie",
              required: false,
            },
        ],
    },
    {
        timestamps: true
    }
)

const Actor = mongoose.model('Actor', actorSchema)
module.exports = Actor