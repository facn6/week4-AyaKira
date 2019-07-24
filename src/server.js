// var http = require("http");
//
// const router = require("./router.js");
//
// var server = http.createServer(router);
// server.listen(4000, function() {
//   console.log("You are the best ever! Your server is running");
// });

const http = require("http");
const router=require("./router");
const port = process.env.PORT || 4000

// var message = "I am dancing, dancing in the rain...";

const server = http.createServer(router);
server.listen(port, function() {
  console.log("You are the best ever! Your server is running");
});
