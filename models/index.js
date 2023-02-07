// import models
const Profile = require("./Profile");
const Workout = require("./Workout");
const Post = require("./Post");


// Profile relationship with Workout
Profile.hasOne(Workout)
Workout.belongsTo(Profile, {
    foreignKey: "profileId",
    onDelete: 'CASCADE',
})


// Profile relationship with Post
Profile.hasMany(Post)
Post.belongsTo(Profile, {
    foreignKey: 'profileId',
    onDelete: 'CASCADE'
})

module.exports = {
    Profile,
    Workout, 
    Post
}