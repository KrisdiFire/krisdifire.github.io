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




//Function before the site opens, and on screen change//
var opel = document.getElementById("op-l");
var oper = document.getElementById("op-r");

var opel1 = document.getElementById("s-l-l");
var oper1 = document.getElementById("s-l-r");
//variables for window sizes
  var mml = window.matchMedia ("(max-width: 10000px)");
  var mmm = window.matchMedia ("(max-width: 768px)");
  var mms = window.matchMedia ("(max-width: 480px)");

  var mml2 = window.matchMedia ("(min-width: 769px)");
  var mmm2 = window.matchMedia ("(min-width: 481px)");
  var mms2 = window.matchMedia ("(min-width: 200px)");
//used to define current win size and stop the script from running until
//another screensize change
var largeWin = 0;
var mediumWin = 0;
var smallWin = 0;

var hiwL = document.getElementsByClassName("hiw")[0];
var hiwR = document.getElementsByClassName("hiw")[1];

function openSite() {
  opel.classList.add("open-l");
  oper.classList.add("open-r");

  hiwL.classList.remove("rotated-image");
  hiwR.classList.remove("rotated-image");
  setTimeout(openSiteSL, 350);
//function from the side menu
  unFreeze();
}
function openSiteSL() {
  opel1.classList.add("open-l");
  oper1.classList.add("open-r");
}
//stop scroll
var bodi = document.getElementsByTagName('body')[0];
function freeze() {
  bodi.classList.add("stopscroll");
}
//add scroll
function unFreeze() {
  bodi.classList.remove("stopscroll");
}
//loading window var
var loadWin = document.getElementById("load-win");
//push load win back
function disappear() {
  loadWin.classList.add("z-ind-back");
}
//pull load win to front
function appear() {
  loadWin.classList.remove("z-ind-back");
}
function closeSite() {
    opel.classList.remove("open-l");
    oper.classList.remove("open-r");

    opel1.classList.remove("open-l");
    oper1.classList.remove("open-r");

    hiwL.classList.add("rotated-image");
    hiwR.classList.add("rotated-image");
    appear();
}
//close and open the loading window
function onResizeCloseOpen() {
  freeze();
  closeSite();
  setTimeout(openSite, 1000);
  setTimeout(disappear, 1500);
  setTimeout(unFreeze, 1500);
}

function screenChange() {

  if ((mmm.matches) && (mmm2.matches) && (mediumWin == 0)) {
      onResizeCloseOpen();
      mediumWin = 1;
      smallWin = 0;
      largeWin = 0;
  }

  if ((mms.matches) && (mms2.matches) && (smallWin == 0)) {
      onResizeCloseOpen();
      smallWin = 1;
      mediumWin = 0;
      largeWin = 0;
  }

  if ((largeWin == 0) && (mml.matches) && (mml2.matches)) {
      onResizeCloseOpen();
      largeWin = 1;
      mediumWin = 0;
      smallWin = 0;
  }
}

window.addEventListener('resize', screenChange);
//run run run
screenChange();

//main menu hide on scroll funk

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {

var currentScrollPos = window.pageYOffset;
var mainMenu = document.getElementsByClassName('main-menu')[0];

  if (prevScrollPos > currentScrollPos) {
    mainMenu.style.top = "0";

  } else {
    mainMenu.style.top = "-3rem";
  }
  prevScrollPos = currentScrollPos;
};