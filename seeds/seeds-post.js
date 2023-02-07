const { Post } = require('../models');

const postData = [
    {
        id: 2000,
        profileId: 1,
        post: "This workout was amazing. I love powerLifting workouts",
    },
    {
        id: 2001,
        profileId: 2,
        post: "This workout was amazing. I love Strongman workouts",
    },
    {
        id: 2003,
        profileId: 3,
        post: "This workout was amazing. I love cardio workouts",
    },
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost;