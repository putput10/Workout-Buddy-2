const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Workout extends Model {}

// set up fields and rules for Product model
Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "profile",
        key: "id",
      },
    },
    workoutType: {
      type: DataTypes.ENUM,
      values: [
        "cardio",
        "olympic_weightlifting",
        "plyometrics",
        "powerlifting",
        "strength",
        "stretching",
        "strongman",
      ],
      allowNull: false,
      validate: {
        isAlpha: true,
        notContains: " ",
      },
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ["beginner", "intermediate", "expert"],
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workout",
  }
);

module.exports = Workout;
