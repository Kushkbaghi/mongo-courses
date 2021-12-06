const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');

// Create router 
const coursesRouter = require('./routes/courses');
const indexRouter = require('./routes/index');

//* Variables
var port = process.env.PORT || 3000;

// Add middleware
const logger = (req, res ,next) =>{
    console.log(`Localhost:host 3000`);
    next();
  }

//************************ */
//      CONFIG
//************************ */

// view engine to read HTML codes
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Get ability to use HTML form input data for POST method
app.use(express.urlencoded({extended:false}));




// Use router and set /item in ifront of URL
app.use(logger);

// Use style fils
app.use(express.static(path.join(__dirname, 'public')));

// Use methodOverrode for PUT and DELETE method
app.use(methodOverride('_method'));

// Use router 
app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.listen(port, ()=> console.log(`Server kör via port: ${port}`))