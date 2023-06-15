const express = require('express')
const {functions} = require('./backend') 
const app = express()

//Used to render HTML with server-side rendering by template rendering html through plain JS
app.set('view engine', 'ejs')

/*Routes
get = fetching resource
post = create resource
put = update resource
delete = delete resource
*/

app.get('/', functions[0], () => {})
app.get('/users', functions[1], () => {})
app.get('/users/new', functions[2], ()=>{})

app.listen(5000, () => {
    console.log(`Server is Listening at port 5000!`)
})