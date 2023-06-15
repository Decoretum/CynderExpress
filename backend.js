const {people} = require('./data')
//const {usermodule} = require('./routes/users')

//These are middleware



const home = (req, res, next) =>{
    // res.status(200).send(`
    // <h1> Home Page! </h1>

    // `)
    //or JSON data through res.json()
    //res.download() sends file to a user that will be prompted for download
    //res.render('home', {})
    let name = req.query.name
    console.log(name)
    return res.render('home', {query: name})
}

const rand = (req, res, next) => {
    return res.render('index', {people: people[0]})
}
const users = (req, res, next) => {
    //lists of users
    return res.send(`
    <h1> Users List </h1> <br><br>
    <a href='/'> Back to Home </a><br><br><br>
    <a href='/users/new'> Create new User </a>

    `)
}

const userobject = (req, res, next) => {
    let id = Number(req.params.id);
    if (Number.isNaN(id)){
        return res.send(`
        <h1>
        Wrong input. Format should be /users/number
        </h1?
        `)
    }

    return res.send(`
    <h1> User ${id} information:

    </h1>
    `)
}

const createuser = (req, res, next) => {
    res.render('NewUser', {name: 'Test'})
    next()
}

const updateuser = (req, res, next) => {

}

const deleteuser = (req, res, next) => {
    
}

module.exports.functions = [home, rand, users, userobject, createuser, updateuser, deleteuser]