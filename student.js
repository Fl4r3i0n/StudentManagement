class Student { 
    constructor(id, name, course) { 
        this.id = id; 
        this.name = name; 
        this.course = course; 
    } 

    getStudentName() { 
        return this.name; 
    } 

    displayDetails() { 
        return `Student ID: ${this.id}\nStudent Name: ${this.name}\nCourse: ${this.course}`; 
    } 
} 

module.exports = { Student };