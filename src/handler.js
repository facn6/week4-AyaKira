var fs = require("fs");
var path = require("path");
var querystring = require("querystring");

function handler(request, response) {
  var endpoint = request.url;

  if (endpoint === "/") {
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("errrrroooorrr");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    });
  } else if (endpoint === "/json") {
    console.log("JSON lives forever!");
    fs.readFile(__dirname + "/words_dictionary.json", function(error, file) {
      if (error) {
        console.log(error);
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("errrrroooorrr");
      } else {
        response.writeHead(200, { "Content-type": "application/json" });
        response.end(file);
      }
    });
  } else if (endpoint.indexOf(".") !== -1) {
    const extention = endpoint.split(".")[1];
    const extentionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpeg"
    };
    const filePath = path.join(__dirname, "..", "public", endpoint);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { "Content-type": extentionType.html });
        response.end("<h1>Sorry, we have an error</h1>");
      } else {
        response.writeHead(200, { "Content-type": extentionType[extention] });
        response.end(file);
      }
    });
  } else if (endpoint === "/create-post") {
    var allTheData = "";
    request.on("data", function(chunkOfData) {
      allTheData += chunkOfData;
    });

    request.on("end", function() {
      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      response.writeHead(308, { Location: "/" });
      response.end();
    });
  }
  var method = request.method;
  console.log(method);
  console.log(endpoint);
}

module.exports = handler;

// var fs = require("fs");
// var path = require("path");
// var querysring = require("querystring");
//
// var handleHome = (request, response) => {
//   const filepath = path.join(__dirname, "..", "public", "index.html");
//   fs.readFile(filepath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeaHead(500, { "Content-type": "text/html" });
//       response.end("<h1>We have an error!</h1>");
//     } else {
//       response.writeHead(200, { "Content-type": "text/html" });
//       response.end(file);
//     }
//   });
// };
//
// var handlePublic = (request, response) => {
//   var url = request.url;
//   var extention = url.split(".")[1];
//   var extentionType = {
//     html: "text/html",
//     css: "text/css",
//     js: "application/javascript",
//     ico: "image/x-icon",
//     jpg: "image/jpeg",
//     json: "application/json"
//   };
//   var filePath = path.join(__dirname, "..", url);
//   fs.readFile(filePath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(500, { "Content-type": extention.html });
//       response.end("<h1>We have an error!</h1>");
//     } else {
//       response.writeHead(200, { "Content-type": extentionType[extention] });
//       response.end(file);
//     }
//   });
// };
//
// var handleNF = (request, response) => {
//   response.writeHead(404);
//   response.end("<h1>Page not found!</h1>");
// };
//
// module.exports = { handleHome, handlePublic, handleNF };
