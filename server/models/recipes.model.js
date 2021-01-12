 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  thumbnail: {
    type: String
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = { Recipe };