'use strict'

const express = require('express')
const port = (process.env.PORT || 7000)
const path = require('path')
const exphbs = require('express-handlebars')

// Inicializations
const app = express()

// settings
app.set('port', port)

app.set('views', path.join(__dirname, 'src/views'))

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

// middlewares

app.use(express.urlencoded({extended: false}))

app.use(express.json())

// routers

app.use(require('./src/routes/routes-client/index'))

//static files

app.use(express.static(path.join(__dirname, 'src/public')))



app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`there was an error ${err}`)
    }else{
        console.log(`server running on port: ${app.get('port')}`)
    }
})