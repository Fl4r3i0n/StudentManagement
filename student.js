class Student { 
    constructor(id, name, course) { 
        this.id = id; 
        this.name = name; 
        this.course = course; 
    } 

    displayDetails() { 
        console.log("Student ID: " + this.id); 
        console.log("Student Name: " + this.name); 
        console.log("Course: " + this.course); 
    } 
} 
// Create a student object 
const student1 = new Student( 
    101, 
    "John", 
    "Computer Science" 
); 
// Display student details 
student1.displayDetails();