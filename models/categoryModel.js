const mongoose = require("mongoose")

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
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

const Category = mongoose.model('Category', categorySchema)
module.exports = Category