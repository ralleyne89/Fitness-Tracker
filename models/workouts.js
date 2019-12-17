const mongoose = require("mongoose");

const Workouts = new mongoose.Schema({
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

module.exports = mongoose.model("Profile", Profile);
