const express = require('express')
const {functions} = require('../backend') 
const {people} = require('../data')
const router = express.Router()



//compiled User router for an ID
router.route('/')
.get(functions[2], () => {})

router.route('/new')
.get(functions[4], ()=>{})
.post((req, res, next) => {
    const isValid = true //if post request is valid
    if (isValid) {
        let name = req.body.name;
        req.user = {
            name: name,
            id: count
        }
        //req.query.arr.array.push({name: name, id:count})
        count++;
        //res.send(`User with name of  ${req.user.name} has been initialized.`)
        res.redirect(`/users/${users.length - 1}`)
    } else {
        res.render('NewUser', {name : req.body.name})
    }
})

router.route('/:id')
.get(functions[3], (req, res) => {})
.put(functions[3], (req, res) => {})
.delete(functions[3], (req, res) => {})

let count = 1;

//This runs code whenever a certain parameter is present
router.param('id',(req, res, next, id) => {
    if (isNaN(Number(id)) === true){
        next()
    } else{
        const person = people[0].find(human => human.id === Number(id) + 1)
        req.user = person;
        console.log(`This involves a User Object with name ${req.user.name}`)
        next()
    }
})



module.exports.usermodule = [router]
