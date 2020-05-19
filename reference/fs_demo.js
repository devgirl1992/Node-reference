const fs = require('fs');
const path = require('path');

// create a folder
// ********comment it after create*****
// fs.mkdir(path.join(__dirname, "./test"), {}, (err) => {
//   if(err) throw err;
//   console.log("folder is created...")
// });


//**** */ create and write to file

// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "hello new file", (err) => {
//   if(err) throw err;
//   console.log("file written to...");
// });


// *****second write just make rewrite on the first write

// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "do it just be relax", (err) => {
//   if(err) throw err;
//   console.log("file written to...");

  // ******File append

//   fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "  appended data", (err) => {
//    if(err) throw err;
//    console.log("appended data")
//   })
// });


// *****read file

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if(err) throw err;
//   console.log(data)
// })

// ******rename file

// fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloNode.txt"), (err) => {
//   if(err) throw err;
//   console.log("file is renamed")
// })





fs.writeFile(path.join(__dirname, "http_demo.js"), "", (err) => {
  if(err) throw err;
  console.log("file written to...");
});