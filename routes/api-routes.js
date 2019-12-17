const Workouts = require("../models/workouts");

module.exports = (app => {

    app.get('/', (req, res) => {
        res.json('welcome to the page!');
    })
    
    app.get("/workouts", (req, res) => {
      Workouts.find()
        .then(workout => {
          res.json({
            confirmation: "success",
            data: workout
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
