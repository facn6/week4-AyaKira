const fs = require("fs");
const path = require("path");


const handleHome= (request,response)=> {

    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("error in the main page handler");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    });
  }

  const handleJson= (request,response)=> {
    fs.readFile(__dirname + "/words_dictionary.json", function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("errrrroooorrr in the json file handler");
      } else {
        response.writeHead(200, { "Content-type": "application/json" });
        response.end(file);
      }
    });
  }
   const handlePublic= (request,response)=> {
     const url=request.url;
    const extention = url.split(".")[1];
    const extentionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpeg"
    };
    const filePath = path.join(__dirname, "..", "public", url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { "Content-type": extentionType.html });
        response.end("<h1>Sorry, we have an error in the internal file -css,javascript...-</h1>");
      } else {
        response.writeHead(200, { "Content-type": extentionType[extention] });
        response.end(file);
      }
    });
  }


const handleNotfound=(request,response)=>{
  response.writeHead(404);
  response.end('<h1>page is not found</h1>');
}



module.exports ={ handleHome,handleJson,handlePublic,handleNotfound};
