const Exercises = require("../models/exercises");

module.exports = (app => {

    // start page with index page
app.get("/", (req, res) => {
  res.sendFile("/Users/Reggie/Fitness-Tracker/views/index.html");
 });
    
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
