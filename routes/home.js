const express = require('express')
const {functions} = require('../backend') 
const router = express.Router()

router.get('/', functions[0], (req, res, next) => {
    let array = []
    req.arr = {
        array: array
    }

})

module.exports = router;
