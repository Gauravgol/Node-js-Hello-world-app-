 
import { createServer } from 'http';

// Creating a server

createServer(function (req, res) {
  console.log("server started");
 
res.writeHead(200, {'Content-Type': 'text/html'});


res.end('Hello World');

// Server listening on port number 3000

}).listen(3000);