const express = require('express')
const {functions} = require('./backend')
const app = express()

 
//Used to render HTML with server-side rendering by template rendering html through plain JS
app.use(express.static('public')) //static files like js and css
app.set('view engine', 'ejs') //template rendering package
app.use(logger) //used in all routes if no other arguments
app.use(express.urlencoded({ extended : true})) //allows us to access data from forms
app.use(express.json()) //fetch from client to server or API to parse JSON data from body


/*Routes
get = fetching resource
post = create resource
put = update resource
delete = delete resource
*/
   
const {usermodule} = require('./routes/users')
const homeRouter = require('./routes/home')
const randomRouter = require('./routes/random')
app.use('/users', usermodule[0]);
app.use('/random', randomRouter);
app.use('/', homeRouter)



function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}


app.listen(5000, () => {
    console.log(`Server is Listening at port 5000!`)
})