// Question 2. Event Loop Demonstration
// Write a Node.js program using:
// - console.log()
// - setTimeout()
// -setImmediate()
// -process.nextTick()
// Display the execution order of all statements and explain why they execute in t arder.


console.log(". Start");

// setTimeout
setTimeout(() => {
    console.log("2. setTimeout executed");
}, 0);

// setImmediate
setImmediate(() => {
    console.log("3. setImmediate executed");
});

// process.nextTick
process.nextTick(() => {
    console.log("4. process.nextTick executed");
});

console.log("5. End");