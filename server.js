__path = process.cwd()

// Module
const express = require('express'); 
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');

//
cors = require('cors'),
secure = require('ssl-express-www');

// Port
const PORT = process.env.PORT || 3000 || 5000 || 3000

// Image title
app.use(favicon(path.join("assets","img","favicon.png")))

// Routes
const main = require('./route/main'),
    api = require('./route/index')

// App use
app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("assets"))
app.use('/', main)
app.use('/api', api)
	
app.use(function (err, req, res, next) {
	res.json({ msg_err: 'Error not found' })
	})
  
// App listen (port)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:` + PORT)
	console.log(`Hii world`)
	})

// 
module.exports = app