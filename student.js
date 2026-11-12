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
        const details = `Student ID: ${this.id}\nStudent Name: ${this.name}\nCourse: ${this.course}`;
        return details;
    }
}

module.exports = Student;