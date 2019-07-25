
const http = require("http");
const router=require("./router");
const port = process.env.PORT || 4000



const server = http.createServer(router);
server.listen(port, function() {
  console.log("You are the best ever! Your server is running");
});
