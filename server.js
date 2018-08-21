// Server Side Code For Deployment
const path = require('path')
const http = require('http')
const express = require('express')

const NODE_MODULES_DIR = path.join(__dirname, 'node_modules')
const DIST_DIR = path.join(__dirname, 'dist')

const app = express()

app.use(express.static(DIST_DIR))
app.use(express.static(NODE_MODULES_DIR))

app.set('views', path.join(DIST_DIR, 'static'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.get('/', function (req, res) {
	res.render('index')
})

app.listen(80)
