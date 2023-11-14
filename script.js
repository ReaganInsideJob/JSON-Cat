/* INTRO TO JSON */

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// Parallax library
var rellax;


let myJSON = {
  "title" : "Fiona Moon",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
  "favorite_color" : "#FF0072",
  "favorite_font" : "Serif",
  "pets" : ["cat", "dog", "roomba"]
};

var randomIndex = Math.floor(Math.random() * myJSON["pets"].length);

// printToPage( myJSON['title'] + " - " + myJSON['pets'][0]);
//
// function printToPage(incoming) {
//   outputParagraph.innerHTML = incoming;
// }

let jsonDatabase = [
  {
    "title" : "Driving Cat",
    "picture_url" : "https://media.giphy.com/media/RVNJvpIBxxc8fJIU2h/giphy-downsized-large.gif",
    "favorite_color" : "#d98bae",
    "pets" : ["cat", "driving", "looking around"]
  },
  {
    "title" : "Sleepy Kitty",
    "picture_url" : "https://media.giphy.com/media/9Wu8LqCQeeaGY/giphy.gif",
    "favorite_color" : "#75b2ba",
    "pets" : ["sleepy cat", "fall asleep", "falling"]
  },
  {
    "title" : "Cat Cardboard",
    "picture_url" : "https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif",
    "favorite_color" : "#b998d6",
    "pets" : ["sitting cat", "cardboard", "stairs"]
  },
];

// createElementMessy(myJSON);

// createElementProper(myJSON);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');

function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";

  /// Append Pets to the list
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var petString = "<li>" + incomingJSON['pets'][i] + "</li>";
    incompleteHTML += petString;
  }

  /// Complete our HTML chunk
  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.style.fontFamily = incomingJSON['favorite_font'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Cats:";
  newContentElement.appendChild(newContentSubhead);



  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var currentPetString = incomingJSON['pets'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerText = currentPetString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}