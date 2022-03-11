const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dbroutes= require("./dbroutes");
router.use('/users', userRoutes);
router.use('/database', dbroutes);
module.exports = router;
