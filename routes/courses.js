const express = require("express");
const router = express.Router();
require("dotenv/config");

// Create mongoos obj
const mongoos = require("mongoose");
const dbURL = process.env.DB_CONNECTION;

// Course schema fom module folder
const Courses = require("./../modules/course");

/*********************************************
 * Initialize database and connection
 *********************************************/
var mongoose = require("mongoose");
const { render } = require("ejs");
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  // Add the listener for db events
  console.log("Connected to db");
});

//* get all courses
router.get("/", async (req, res) => {
  // Läs ut från databasen
  try {
    const tempCourses = await Courses.find();

    res.render("courses/", { courses: tempCourses });
  } catch (err) {
    res.json({ message: err });
  }
});


// Navigate ro set new course page 
router.get("/new",(req, res) => { 
  res.render('courses/new');
})
//* Print a course
router.get("/:id", async (req, res) => {
  const theCourse = await Courses.findById(req.params.id);

  // FOR POSTMAN TEST
  console.log(theCourse);
  res.render("courses/course", { course: theCourse });
});

//* post new course
router.post('/', async (req, res) => {
  const course = new Courses({
    kurskod : req.body.kurskod,
    kursnamn : req.body.kursnamn,
    kursplan : req.body.kursplan,
    termin : req.body.termin,
    progression : req.body.progression
  })
  try {
    await course.save();
    res.redirect(`/courses/${course.id}`);
  } catch (error) {
    console.log(error);
    res.render('courses/new');
  }
  
})



//* Print a course
router.delete("/:id", async (req, res) => {
  await Courses.findByIdAndDelete(req.params.id);

  // FOR POSTMAN TEST
  res.redirect("/courses");
});




module.exports = router;
