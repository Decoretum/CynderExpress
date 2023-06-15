const express = require('express')
const {functions} = require('../backend') 
const router = express.Router()

router.get('/', functions[1], ()=>{})

module.exports = router;