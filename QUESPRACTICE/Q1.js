// Question 1. Student Notification System
// Create a custom EventEmitter that performs the following operations:
// 1. Create an event named studentRegistered.
// 2. When the event is triggered, display the student's name and roll number.
// 3. Create another event named studentLogout.
// 4. Display an appropriate message when the student logs out.


const EventEmitter = require('events');

// Create a custom EventEmitter class
class Student extends EventEmitter {
    registerStudent(name, rollNo) {
        this.emit('studentRegistered', name, rollNo);
    }

    logoutStudent() {
        this.emit('studentLogout');
    }
}

// Create an object
const student = new Student();

// Event 1: Student Registered
student.on('studentRegistered', (name, rollNo) => {
    console.log("Student Registered Successfully!");
    console.log("Student Name:", name);
    console.log("Roll Number:", rollNo);
});

// Event 2: Student Logout
student.on('studentLogout', () => {
    console.log("Student has logged out successfully!");
});

// Trigger events
student.registerStudent("GPS", 101);
student.logoutStudent();