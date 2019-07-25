function myFunction() {
  document.getElementById("loader").style.display = "none";
}

let arrOfWords = [];
function populate() {
  var objectRecieved = "/json";
  fetch(objectRecieved)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      arrOfWords = Object.keys(parsed);
    })
    .then(function() {
      myFunction();
    });
}
populate();

// Fetch the JSON object, parse it into an array
// onkeyup this functions executes and populates the list of suggested words
function showList() {
  var input = document.getElementById("input").value.toLowerCase();
  var ul = document.getElementById("serchList");
  ul.style.display = "block";
  // List of suggestions to be wiped clean before generating a new list
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  // No list of suggestions to be shown, if there is no input
  if (input !== "") {
    var roots = arrOfWords.filter(function(element) {
      return element.startsWith(input);
    });
    var suggestions = roots.slice(0, 10);
    // Create a node for each word suggested
    suggestions.forEach(function(element) {
      var li = document.createElement("li");
      li.innerHTML = element;
      // Words can be selected by clicking on them or pointing + hitting enter
      li.addEventListener("click", function(e) {
        document.getElementById("input").value = e.target.textContent;
        document.getElementById("serchList").style.display = "none";
      });

      li.addEventListener("mouseenter", function(e) {
        document.onkeyup = function() {
          if (event.keyCode === 13) {
            document.getElementById("input").value = e.target.textContent;
            document.getElementById("serchList").style.display = "none";
          }
        };
      });
      ul.appendChild(li);
    });
  }
}
