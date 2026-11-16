// Question 1. Student Notification System
// Create a custom EventEmitter that performs the following operations:
// 1. Create an event named studentRegistered.
// 2. When the event is triggered, display the student's name and roll number.
// 3. Create another event named studentLogout.
// 4. Display an appropriate message when the student logs out.


const EventEmitter = require('events');
const A = new EventEmitter();

// Event 1: Student Registration
A.on('studentRegistered', (name, roll_no) => {
    console.log(`Welcome to class A ${name}`);
    console.log(`Your roll_no ${roll_no}`);
});

// Event 2: Student Logout
A.on('studentLogout', () => {
    console.log("Student logged out successfully!");
});

// Trigger first event
A.emit('studentRegistered', 'Gaurav', 101);

// Trigger second event
A.emit('studentLogout');