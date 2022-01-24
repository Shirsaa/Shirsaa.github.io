// console.log("hello world");

const http = require('http');
const fs = require('fs');
// var url=require("url");  

const hostname = '127.0.0.1';
const port = 800;
const home = fs.readFileSync('shirsaa.html', 'utf-8');

const server = http.createServer((req, res) => {
  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
