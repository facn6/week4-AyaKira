const handler = require("./handler");

const router = (request, response) => {
const url = request.url;
  if (url === "/") {
   handler.handleHome(request, response);
   }
   else if(url==="/json") {
   handler.handleJson(request, response);
   }
   else if (url.indexOf(".") !== -1) {
   handler.handlePublic(request, response);
  }
   else
   {
      handler.handleNotfound(request,response);
   }
 }


 module.exports = router ;
