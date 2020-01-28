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
        console.log(1);
      })
      .catch(err => {
        res.json(err);
        console.log(2);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(3);
      })
      .catch(err => {
        res.json(err);
        console.log(4);
      });
  });

  app.post("/api/workouts/", (req , res) => {
    console.log("createWorkout", req.body);
    db.Workout.create(req.body)
    // .then(({ _id }) =>
    //   db.Workout.create(
    //     {req.},
    //     // { $push: { Workout: _id } },
    //     // { new: true }))
    //   )
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(5, dbWorkout);
    })
    .catch(err => {
      res.json(err);
      console.log(6);
    });
    
    // const workout = {
    //   exercise: req.body.exercise,
    //   name: req.body.name,
    //   duration: req.body.duration,
    //   weight: req.body.weight,
    //   reps: req.body.reps,
    //   sets: req.body.sets,
    //   distance: req.body.distance
    // };
    // const workout = new Workout({
    //   _id: mongoose.Schema.Types.ObjectId(),
    //   exercise: req.body.exercise,
    //   name: req.body.name,
    //   duration: req.body.duration,
    //   weight: req.body.weight,
    //   reps: req.body.reps,
    //   sets: req.body.sets,
    //   distance: req.body.distance
    // });
    // workout
    // .save()
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(err => console.log(err));

    // -------------------------------


  });

  // app.get("/populatedWorkout", (req, res) => {
  //   db.Workout.find({})
  //     .populate("Workouts")
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      // .populate("Workouts")
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(7);
      })
      .catch(err => {
        res.json(err);
        console.log(8);
      });
  });


}
