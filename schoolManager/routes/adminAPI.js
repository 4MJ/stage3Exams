var express = require('express');
var router = express.Router();
const studentManager = require("../models/Student");
const staffManager = require("../models/Staff");
const courseManager = require("../models/Courses")

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Seven Academy School Manager' });
});

/*Viewing all Students */
router.get("/students",(req, res)=>{
  res.send(students);
})
/* Viewing all staff*/
router.get("/staffs", (req, res)=>{
  res.send(staffs);
})
//viewing all courses
router.get("/courses", (req, res)=>{
  res.send(courses);
})

//get students by api
router.get('/students/:id', (req, res)=>{
  var id= req.params.id-1;
  res.json(students[id]);
})
//add new student
router.post("/students", (req,res)=>{
  var studentInfo = req.body;  
  students.push(studentInfo);
  res.json(students);
});
//update student
router.patch("/students/:id", (req,res)=>{
  var id = req.params.id-1;
  var studentToUpdate = students[id];
  studentToUpdate = req.body;
  students[id] = studentToUpdate;
  res.send(students);
})
//delete Student
router.delete("/students/:id",(req,res)=>{
  var id = req.params.id-1;
  students = students.splice(id);
  res.json(students);
});

//get staff by api
router.get('/staffs/:id', (req, res)=>{
  var id= req.params.id-1;
  res.json(staffs[id]);
})
//add staff
router.post("/staff", (req,res)=>{
  var staffInfo = req.body;  
  staffs.push(staffInfo);
  res.json(staffs);
});
//update staff
router.patch("/staffs/:id", (req,res)=>{
  var id = req.params.id-1;
  var staffToUpdate = staffs[id];
  staffToUpdate = req.body;
  staffs[id] = staffToUpdate;
  res.send(staffs);
})
//delete Staff
router.delete("/staffs/:id",(req,res)=>{
  var id = req.params.id-1;
  staffs = staffs.splice(id);
  res.json(staffs);
});

//get courses by api
router.get('/courses/:id', (req, res)=>{
  var id= req.params.id-1;
  res.json(courses[id]);
})
//add a new course
router.post("/courses", (req,res)=>{
  var courseInfo = req.body;  
  courses.push(courseInfo);
  res.json(courses);
});
//update course
router.patch("/staffs/:id", (req,res)=>{
  var id = req.params.id-1;
  var courseToUpdate = courses[id];
  courseToUpdate = req.body;
  courses[id] = courseToUpdate;
  res.send(courses);
})
//delete course
router.delete("/courses",(req,res)=>{
  var id = req.params.id-1;
  courses= courses.splice(id);
  res.json(courses);
});

router.get("/login", (req, res)=>{
  res.render("login");
})
router.get("/protected", (req, res)=>{
  res.render("details", {
    studentsSent:students,
    staffsSent:staffs,
    coursesSent:courses
  })
})

module.exports = router;
