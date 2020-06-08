exports.courses = class Course{
    contructor(id, name, description){
        this.id=id,
        this.name=name,
        this.description=description
    }
    getCourseDetails(){
        console.log(JSON.stringify(this));
    }
}