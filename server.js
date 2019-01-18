// Server Side Code For Deployment
const path = require('path')
const express = require('express')

const DIST_DIR = path.join(__dirname, 'dist')
const app = express()

app.use(express.static(DIST_DIR))

app.set('views', path.join(DIST_DIR, 'static'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.get('/', function (req, res) {
	res.render('index')
})

app.listen(8080)