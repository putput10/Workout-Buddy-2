const router = require('express').Router();
const { Profile, Workout, Post } = require('../models')
const withAuth = require('../utils/auth');

// render the homepage
router.get('/', async (req,res) => {
    try{
        // Get all Post and Workout Data and join with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: Profile,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData. map((post) => post.get({ plain: true }));
     
    res.render('welcome', {
        posts,
        loggedIn: req.session.loggedIn
    });
    } catch (err) {
        res.status(500).json(err);
    }
});
// render the login page
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/posts');
        return;
    }

    res.render('login');
});

// render the profile page
router.get('/profile', async (req,res) => {
    try{
        const profileData = await Profile.findByPk(req.session.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post, Workout}],
        });

        const profile = profileData.get({ plain: true });
    
        res.render('profile', {
        ...profile,
        loggedIn:true
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/post', (req,res) => {
//     res.render('post')
// });

// render the Posts
router.get('/posts', async (req,res) => {
    try{
        // Get all Post and Workout Data and join with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: Profile,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData. map((post) => post.get({ plain: true }));
     
    res.render('posts', {
        posts,
        loggedIn: req.session.loggedIn
    });
    } catch (err) {
        res.status(500).json(err);
    }
});



// render the sign-up page
router.get('/sign-up', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/posts');
        return;

    }
    
    res.render('sign-up');

});

// render the welcome
router.get('/welcome', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;

    }
    
    res.render('welcome');

});

module.exports = router;