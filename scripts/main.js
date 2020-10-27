//Change the image upon clicking it

//Select the img tag
let myImage = document.querySelector("img");

//Upon clicking it, call the anonymous function
myImage.onclick = function () {
  //Extract the src attribute
  let mySrc = myImage.getAttribute("src");

  //If the 1st poster link is being href'd, then change it
  //and vice-versa
  //Note that the alt attribute is also being changed
  if (mySrc === "images/gankutsuou-poster.jpg") {
    myImage.setAttribute("src", "images/gankutsuou-poster-2.jpg");
    myImage.setAttribute(
      "alt",
      "Gankutsuou Poster: A long haired anti-hero (below) and (on top) our protagonist"
    );
  } else {
    myImage.setAttribute("src", "images/gankutsuou-poster.jpg");
    myImage.setAttribute(
      "alt",
      "Gankutsuou Poster: A long haired anti-hero caresing a naive boy"
    );
  }
};

//Greet user in the review section

//Select the user class associated tag
let nameSetter = document.querySelector(".user");

//Select the button tag
let changeUser = document.querySelector("button");

function setGrettingName() {
  //Prompt for input
  let myName = prompt("Please enter your name.");

  //If the name has been entered,
  //create a kay-value pair in the local storage of the browser
  //and insert the string into the user class associated tag
  if (myName) {
    localStorage.setItem("name", myName);
    nameSetter.innerHTML = myName;
  }

  //If the name hasn't been entered or the prompt was cancelled,
  //alert the user and re-call the function
  else {
    alert("Enter a Valid Name");
    setGrettingName();
  }
}

//If there isn't an entry for the key=name in the browser's local storage, then call the above function
//Else use the value associated with the name key and insert in the user class associated tag
if (localStorage.getItem("name") === null) {
  setGrettingName();
} else {
  nameSetter.textContent = localStorage.getItem("name");
}

//Trigger function call upon clicking the "Change User" button, to change the value of name in the local browser's storage
changeUser.onclick = function () {
  setGrettingName();
};
