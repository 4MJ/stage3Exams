var express = require('express');
var router = express.Router();
const studentManager = require("../models/Student");
const staffManager = require("../models/Staff");
const courseManager = require("../models/Courses");

/*Sample Students*/
var student1= new studentManager.student();
var student2 = new studentManager.student();

student1.id=1;
student1.name = "Mambo Joy";
student1.level = 3;
student1.age = 22;
student1.course = "Full Stack Web Development";
student1.gender = "female";

student2.id=2;
student2.name = "Lontchi Lionelle";
student2.level = 2;
student2.age = 23;
student2.course = "Digital Marketing";
student2.gender = "female";

/*Sample Staff */
var staff1= new staffManager.staff();
var staff2 = new staffManager.staff();

staff1.id=1;
staff1.name = "Mr. Laslie";
staff1.role = "instructor";
staff1.gender = "male";

staff2.id=2;
staff2.name = "Miss Chofor";
staff2.role = "Administrative assistant";
staff2.gender = "female";

/*Course Sample*/
var course1 = new courseManager.courses();
var course2 = new courseManager.courses();

course1.id=1
course1.name="Full Stack Web Development";
course1.description= " Creating good applications";

course2.id=2
course2.name="Digital Marketing";
course2.description= "Best Digital Marketers";

/*student list*/
students= [
  student1, student2
];
/*list of Staff*/
staffs = [
  staff1, staff2
]
//list of courses
courses = [
  course1, course2
]

///* todo *///

/*Viewing all Students */
router.get("/students",(req, res)=>{
  res.send("the students");
})
/* Viewing all staff*/
router.get("/staffs", (req, res)=>{
  res.send("the staff");
})
//viewing all courses
router.get("/courses", (req, res)=>{
  res.send("the courses");
})

module.exports = router;
