const { Workout } = require("../models");

const workoutData = [
  {
    id: 1000,
    profileId: 1,
    workoutType: "powerLifting",
    difficulty: "intermediate",
  },
  {
    id: 1001,
    profileId: 2,
    workoutType: "strongman",
    difficulty: "expert",
  },
  {
    id: 1002,
    profileId: 2,
    workoutType: "cardio",
    difficulty: "beginner",
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
