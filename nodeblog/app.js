const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('site2/index')
})
app.get('/about', (req, res) => {
    res.render('site2/about')
})
app.get('/blog', (req, res) => {
    res.render('site2/blog')
})

app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})







