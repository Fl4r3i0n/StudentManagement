class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    displayDetails() {
        const details = `Student ID: ${this.id}\nStudent Name: ${this.name}\nCourse: ${this.course}`;
        console.log(details);
        return details;
    }
}

if (require.main === module) {
    const student1 = new Student(
        101,
        "John",
        "Computer Science"
    );
    student1.displayDetails();
}

module.exports = { Student };
