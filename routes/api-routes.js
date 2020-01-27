// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.get("/user", (req, res) => {
  //   db.User.find({})
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  app.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { Workouts: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.get("/populateduser", (req, res) => {
  //   db.User.find({})
  //     .populate("Workouts")
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  app.put("/api/workouts/", (req, res) => {
    db.User.find({})
      .populate("Workouts")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });


};
