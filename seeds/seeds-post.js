const { Post } = require('../models');

const postData = [
    {
        id: 2000,
        profileId: 1,
        post: "This workout was amazing. I love powerLifting workouts",
        title: "title1"
    },
    {
        id: 2001,
        profileId: 2,
        post: "This workout was amazing. I love Strongman workouts",
        title: "title2"
    },
    {
        id: 2003,
        profileId: 3,
        post: "This workout was amazing. I love cardio workouts",
        title: "title3"
    },
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost;