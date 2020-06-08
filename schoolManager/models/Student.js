exports.student = class Student{
    constructor(id, name, level, course, gender, age){
        this.id=id,
        this.name=name, 
        this.level=level,
        this.course=course,
        this.gender=gender, 
        this.age=age
    }
    getStudentInformation(){
        console.log(JSON.stringify(this));
    }
}