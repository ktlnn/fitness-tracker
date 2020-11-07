const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", (req, res) => {
    console.log("testme", req.body);
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(401).json(err);
      })
});
  
  
router.post("/api/workouts/range", function (req, res) {
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(401).json(err);
      })
});
  
router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
  
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(401).json(err);
      })
});
  
  
module.exports = router;