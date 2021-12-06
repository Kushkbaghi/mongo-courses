const express = require("express");
const router = express.Router();
require("dotenv/config");

// Create mongoos obj
const mongoos = require("mongoose");
const dbURL = process.env.DB_CONNECTION;

// Recall Schema
const Courses = require("./../modules/course");

// Course schema fom module folder
const Course = require("./../modules/course");

/*********************************************
 * Initialize database and connection
 *********************************************/
var mongoose = require("mongoose");
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  // Add the listener for db events
  console.log("Connected to db");
});

// get all courses
router.get("/", async (req, res) => {
  // Läs ut från databasen
  try {
    const tempCourses = await Courses.find();
    //res.render('courses', {courses: tempCourses});
    res.render('courses', {course: jsonObj});
  } catch (err) {
    res.json({ message: err });
  }
});

// Print a course
router.get("/:id", async (req, res) => {
   
    const theCourse = await Courses.findById(req.params.id);

    //theCourse = jsonCourse.filter(course => course._id === idToPrint );

    // FOR POSTMAN TEST
    res.send(theCourse);
    //res.render('course', {course: theCourse});
  });

router.post("/", (req, res) => {
  res.send("hejdå");
});

module.exports = router;
