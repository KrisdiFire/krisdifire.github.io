//Button for going to the top of the page
mybutton = document.getElementById("up");

// Show the button after scrolling 500px down from the top
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.classList.add("up-opacity");
  } else {
    mybutton.classList.remove("up-opacity");
  }
}

//assign an event listener to activate on click
mybutton.addEventListener("click", upTop);

// function to scroll up
function upTop() {
  document.body.scrollTop = 0; // Za Safari
  document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE and Opera
}

//Function before the site opens

function openSite() {

  let opel = document.getElementById("op-l");
  let oper = document.getElementById("op-r");

  opel.classList.add("open-l");
  oper.classList.add("open-r");
//function from the side menu
  unFreeze();
}

function freeze() {
  var bodi = document.getElementsByTagName('body')[0];
  bodi.classList.add("stopscroll");
}

function unFreeze() {
  var bodi = document.getElementsByTagName('body')[0];
  bodi.classList.remove("stopscroll");
}

function disappear() {
  let loadWin = document.getElementById("load-win");

  loadWin.classList.add("z-ind-back");
}

freeze();

setTimeout(openSite, 1500);
setTimeout(disappear, 1750);