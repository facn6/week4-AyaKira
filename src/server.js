// var http = require("http");
//
// const router = require("./router.js");
//
// var server = http.createServer(router);
// server.listen(4000, function() {
//   console.log("You are the best ever! Your server is running");
// });

var http = require("http");

const handler = require("./handler.js");

// var message = "I am dancing, dancing in the rain...";

var server = http.createServer(handler);
server.listen(4000, function() {
  console.log("You are the best ever! Your server is running");
});
