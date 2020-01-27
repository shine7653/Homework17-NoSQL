const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/nosql", { useNewUrlParser: true, useUnifiedTopology: true });

//Seeds
// db.Workout.create({
//   exercise: [
//     {
//       type: "resistance",
//       name: "running",
//       duration: 20,
//       weight: 50,
//       reps: 5,
//       sets: 3,
//       distance: 300
//     }]
// })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
