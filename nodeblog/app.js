const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/nodeblog_db',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('site/index')
})
app.get('/about', (req, res) => {
    res.render('site/about')
})
app.get('/blog', (req, res) => {
    res.render('site/blog')
})

app.get('/contact', (req, res) => {
    res.render('site/contact')
})

app.get('/login', (req, res) => {
    res.render('site/login')
})

app.get('/register', (req, res) => {
    res.render('site/register')
})

app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})







