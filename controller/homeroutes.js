const router = require('express').Router();
const { Profile, Workout, Post } = require('../models')
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
     
    res.render('homepageS', {
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
        res.redirect('/profile');
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
// render the profile page
router.get('/sign-up', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;

    }
    
    res.render('sign-up');

});

module.exports = router;