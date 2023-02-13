const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const postRoutes = require('./postRoutes')

router.use('/profile', profileRoutes);
router.use('/post',postRoutes)

module.exports = router;