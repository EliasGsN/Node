const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
        return console.log("Error: ", error);
    }
    console.log("Folder created successfully");
});

// Create a file
fs.writeFile
    (path.join(__dirname, "/test", "test.txt"), 
    'Hello node! ', 
    (error) => {
        if (error) {
            return console.log("Error: ", error);
        }
        console.log("File created successfully");
        
        // Append to a file
        fs.appendFile
            (path.join(__dirname, "/test", "test.txt"),
            'Hello world!', 
            (error) => {
                if (error) {
                    return console.log("Error: ", error);
                }
                console.log("File appended successfully");
            }
        ); 

        // Read a file
        fs.readFile(
            path.join(__dirname, "/test", "test.txt"), 
            'utf8', 
            (error, data) => {
                if (error) {
                return console.log("Error: ", error);
                }
                console.log(data);
            }   
        );
    }
);


