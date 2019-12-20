const mongoose = require("mongoose");
let exercises = require('../config/exercises.json')

const Exercises = new mongoose.Schema({
  arms: {
    type: String,
    trim: true,
    default: ""
  },
  chest: {
    type: String,
    trim: true,
    default: ""
  },
  back: {
    type: String,
    trim: true,
    default: ""
  },
  core: {
    type: String,
    trim: true,
    default: ""
  },
  legs: {
    type: String,
    trim: true,
    default: ""
  }
});



module.exports = mongoose.model("Exercises", Exercises);
