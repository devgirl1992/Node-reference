const http = require('http');

// creat server object
http.createServer((req, res) => {""
  // write response
  res.write("Hello server");
  res.end();
}).listen(5000, () => console.log("server running on port..."))

