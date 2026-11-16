// Question 3. Student Recont Management System
// Create a file named students.txt and perfore the following operatiom
// 1. Create a file and insert student detatis.
// 2. Read and display the file contants.
// 3. Append a new student's stalls without deleting existing reconh,
// 4. Update the file contents with one information.
// 5. Delete the file.


const fs = require('fs');

// 1. Create file and insert student details
fs.writeFile("students.txt", "Name: Gaurav No: 101", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File Created");
        
        fs.readFile("students.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("\nStudent Details:");
                console.log(data);

                // 3. Append new student details
                fs.appendFile("students.txt", "\n\nName: Rahul\nRoll No: 102", (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("\nNew Student Added");

                        // 4. Update file contents
                        fs.writeFile("students.txt",
                            "Name: Gaurav\nRoll No: 101\n\nName: Rahul\nRoll No: 102\n\nName: Aman\nRoll No: 103",
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log("\nFile Updated");

                                    // Display updated contents
                                    fs.readFile("students.txt", "utf8", (err, data) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log("\nUpdated Records:");
                                            console.log(data);

                                            // 5. Delete file
                                            fs.unlink("students.txt", (err) => {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                else {
                                                    console.log("\nFile Deleted");
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        );
                    }
                });
            }
        });
    }
});