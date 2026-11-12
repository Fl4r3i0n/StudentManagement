// student.js
var Student = class {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
  displayDetails() {
    return `Student ID: ${this.id}, 
Student Name: ${this.name}, 
Course: ${this.course}`;
  }
  getStudentName() {
    return this.name;
  }
};
module.exports = Student;
