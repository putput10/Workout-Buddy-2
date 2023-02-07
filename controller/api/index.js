const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const postRoutes = require('./postRoutes')

router.use('/Profile', profileRoutes);
router.use('/Post',postRoutes)

module.exports = router;