const path = require("path");

// Just the current file name
console.log(path.basename(__filename));

// Current directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create Path object
console.log(path.parse(__filename));

// Join file path
console.log(path.join(__dirname, "test", "test.html"));

