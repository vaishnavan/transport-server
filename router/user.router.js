const express = require('express')
const { userAuth } = require('../controller/user.controller')
const router = express.Router()

router.post('/login', userAuth)

module.exports = router