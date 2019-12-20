const Exercises = require("../models/exercises");

module.exports = (app => {

    app.get('/', (req, res) => {
        res.json('welcome to the page!');
    })
    
    app.get("/exercises", (req, res) => {
     Exercises.find({})
        .then(exercise => {
          res.json({
            confirmation: "success",
            data: exercise
          });
        })
        .catch(err => {
          res.json({
            confirmation: "fail",
            message: err.message
          });
        });
    });
});
