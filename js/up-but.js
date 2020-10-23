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

var opel = document.getElementById("op-l");
var oper = document.getElementById("op-r");

function openSite() {
  opel.classList.add("open-l");
  oper.classList.add("open-r");
//function from the side menu
  unFreeze();
}
//stop scroll
function freeze() {
  var bodi = document.getElementsByTagName('body')[0];
  bodi.classList.add("stopscroll");
}
//add scroll
function unFreeze() {
  var bodi = document.getElementsByTagName('body')[0];
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
    appear();
}

function onResizeCloseOpen() {

  let mm = window.matchMedia ("(max-width: 768px)");
  let mmo = window.matchMedia ("(min-width: 740px)");

  let mms = window.matchMedia ("(max-width: 480px)");
  let mmos = window.matchMedia ("(min-width: 452px)");

  if ((mm.matches) && (mmo.matches)) {
      freeze();
      closeSite();
      setTimeout(openSite, 2500);
      setTimeout(disappear, 2500);
      setTimeout(unFreeze, 2500);
  }

  if ((mms.matches) && (mmos.matches)) {
    freeze();
    closeSite();
    setTimeout(openSite, 2500);
    setTimeout(disappear, 2500);
    setTimeout(unFreeze, 2500);
}

}

window.addEventListener('resize', onResizeCloseOpen);

//run run run
freeze();
setTimeout(openSite, 1500);
setTimeout(disappear, 2000);