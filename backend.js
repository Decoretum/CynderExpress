const home = (req, res, next) =>{
    // res.status(200).send(`
    // <h1> Home Page! </h1>

    // `)
    //or JSON data through res.json()
    //res.download() sends file to a user that will be prompted for download
    res.render('index', {text: 'world'})
}

module.exports.functions = [home]