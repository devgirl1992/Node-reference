const path = require('path');

// Base File Name
console.log("file name with path => ", __filename);
console.log("just file name => ", path.basename(__filename))

// Directory name
console.log("Directory name(Folder) => ", path.dirname(__filename))

// file extention
console.log("file extention => ", path.extname(__filename))

// create path Object
console.log("object of file path => ", path.parse(__filename))

// creat path object and access to them 
console.log("access to path object => ",  path.parse(__filename).ext)

// concatenate path