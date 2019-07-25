let arrOfWords = [];
function populate() {
  var objectRecieved = "/json";
  fetch(objectRecieved)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      arrOfWords = Object.keys(parsed);
    });
}
populate();
