var express= require('express');
const { createUser } = require('../controllers/user');
const router= express.Router()
const User = require('../models/User');

router.route('/').post(createUser)

module.exports= router

