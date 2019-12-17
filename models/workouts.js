const mongoose = require('mongoose');

const Workouts = new mongoose.Schema({
    arms: {},
    chest: {},
    back: {},
    core: {},
    legs: {}
});

module.exports = mongoose.model('Profile', Profile)