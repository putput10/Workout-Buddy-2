const router = require('express').Router();
const { Profile, Workout, Post } = require('../models')
// render the homepage
router.get('/', async (req,res) => {
    // try{
    //     // Get all Post and Workout Data and join with user data
    //     const postData = await Post.findAll((

    //     ));
     
    res.render('homepage', {
        // posts,
        // loggedIn: req.session.loggedIn
    });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});
// render the login page
router.get('/login', (req,res) => {
    res.render('login');
});

// render the profile page
router.get('/profile', (req,res) => {
    res.render('profile')

});

// render the profile page
router.get('/sign-up', (req,res) => {
    res.render('sign-up')

});

module.exports = router;