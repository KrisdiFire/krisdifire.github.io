////////////////////////////////////////

//FUNCTION To show the button after scrolling 500px down from the top//

////////////////////////////////////////////////

//Button for going to the top of the page
mybutton = document.getElementById("up");

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
  document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE i Operu
}

////////////////////////////////////////

//Function before the site opens, and on screen change//

////////////////////////////////////////////////

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

////////////////////////////////////////

//HIDE MMenu on scroll down//

////////////////////////////////////////////////

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


  scrollFunction();
};

////////////////////////////////////////

//FUNKCIJA ZA FADE-IN-OUT SideSocialMenu//

////////////////////////////////////////////////

var contactNav = document.getElementById("soc-menu");

function scrollSideM() {

  let lowPerc = 55,
  highPerc = 80;

  let bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight),
  bodyScrolled = Math.round(Math.max(window.pageYOffset + window.innerHeight/* plus innerH je zato sto gleda procenat skrollan od vrha, pa nikad ne dodje do 100%*/, document.documentElement.scrollTop  + window.innerHeight, document.body.scrollTop  + window.innerHeight)),
  convertToPercent = Math.round((bodyScrolled / bodyHeight * 100));

//kad je izmedju 

  if (convertToPercent > lowPerc) {

    contactNav.classList.add("soc-opacity-0");
    contactNav.classList.add("social-menu");
    
    }

//kad je gore desno

   else {

    contactNav.classList.add("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");
    contactNav.classList.remove("social-menu");

    }

//kad je dole

   if (convertToPercent > highPerc) {

    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");

    }
}

////////////////////////////////////////

//FUNKCIJA ZA PARALAX//

////////////////////////////////////////////////

if (typeof yourFunctionName == 'function') { 
  yourFunctionName(); }

let closePrlx = document.getElementsByClassName("prlx-close");
let medPrlx = document.getElementsByClassName("prlx-mult-med");
let farPrlx = document.getElementsByClassName("prlx-mult-sm");
let verTxt = document.getElementsByClassName("o5t")[0];
let verTxt2 = document.getElementsByClassName("o6t")[0];
  
function scrollElement() {

  let closeY = window.pageYOffset/+36;
  let mediumY = window.pageYOffset/+66;
  let farY = window.pageYOffset/+85;

  for (var i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translate3d" + "(" + "0," + closeY  + "rem" + ", 0" + ")";
  }

  for (var o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
  }

  for (var p = 0; p < farPrlx.length; p++) {
    farPrlx[p].style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
  }
//za vertikalni text - kod galerije paziti, jer ih nema pa izbacuje error.
//Za ostale ne izbacuje jer ih for loop ne moze da nadje (zapamtiti).
//  verTxt.style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
//  verTxt2.style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
}

window.addEventListener("scroll", scrollElement);

function singPrlx() {

  let prlxClassClose = document.getElementsByClassName('prlx-closer');
    
    for (let b = 0; b < prlxClassClose.length; b++) {

      let win_off = window.pageYOffset,
          win_h = window.innerHeight,
          elem_h = prlxClassClose[b].offsetHeight,
          elem_off = prlxClassClose[b].offsetTop,
          elemPar_h = prlxClassClose[b].parentNode.clientHeight,
          elemPar_off = prlxClassClose[b].parentNode.offsetTop,
        //elemPar_off_bot = (elemPar_off + elemPar_h) - elemPar_off,
        //elemParPar_h = prlxClassClose[b].parentNode.parentNode.offsetHeight,
          elemParPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

          diff = elem_off - elemPar_h,
          max = Math.max(elem_h, win_h),
          speed = diff / max,

          cont_scrolled = win_off - elemParPar_off - elemPar_off,

          cont_scrolled0 = cont_scrolled + win_h/2 - elemPar_h/2, // umesto elemPar_h uzeti elemParPar ako nema vise redova
          
          value = Math.round(cont_scrolled0 * speed/2);

          prlxClassClose[b].style.transform = `translate3d(0,${value * 1}px, 0)`;

    }

  }  

  function singPrlxOw() {

    let prlxClassClose = document.getElementsByClassName('prlx-closer-ow');
    
    for (let b = 0; b < prlxClassClose.length; b++) {

      let win_off = window.pageYOffset,
          win_h = window.innerHeight,
          elem_h = prlxClassClose[b].offsetHeight,
          elem_off = prlxClassClose[b].offsetTop,
          elemPar_h = prlxClassClose[b].parentNode.clientHeight,
          elemPar_off = prlxClassClose[b].parentNode.offsetTop,
          elemParPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

          diff = elem_off - elemPar_h,
          max = Math.max(elem_h, win_h),
          speed = diff / max,

          cont_scrolled = win_off - elemParPar_off - elemPar_off,

          cont_scrolled0 = cont_scrolled + win_h/2 - elemPar_h/2, // umesto elemPar_h uzeti elemParPar ako nema vise redova
          
          value = Math.round(cont_scrolled0 * speed);

          prlxClassClose[b].style.transform = `translate3d(0,${value * -1}px, 0)`;

    }
  
  }

////////////////////////////////////////

//SIDE MENU PART//

////////////////////////////////////////////////

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropbtn");
var i;

//loop
for (i = 0; i < dropdown.length; i++) {
  //add an event listener for the following function
  dropdown[i].addEventListener("click", function() {
//activate the class active
    this.classList.toggle("active");
//variable using the active classes next sibling
    var dropdownContent = this.nextElementSibling;
//if the container has display block, then put display none onto it
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } 
//if it doesnt, close all other dropdowns and display this element
    else {
      closeDropdown();
      dropdownContent.style.display = "block";
    }
  });
}

//closes all dropdowns
function closeDropdown() {
//take all elements with class dropbtn
  var dropActive = document.querySelectorAll('.dropbtn'),
  //assign variables for the loop
  o = 0,
  p = dropActive.length;
//loop through all the elements and remove the active class from them
  for (o; o < p; o++) {
    dropActive[o].classList.remove("active"); 
  }
//close dropdowns
  var myClasses = document.querySelectorAll('.dropdown-container'),
    i = 0,
    l = myClasses.length;
//do not display dropdown containers
for (i; i < l; i++) {
    myClasses[i].style.display = 'none';
  }
}

////close side menu////
//take all the elements in this class
var closeBtns = document.getElementsByClassName("close-side-menu");
//assign a var for the loop
var l;
//loop loop through all the elements
for (var l = 0; l < closeBtns.length; l++) {
/*add event listeners to the elements for the following functions*/
  closeBtns[l].addEventListener("click", closeSlideMenu);
  //closes the dropdowns
  closeBtns[l].addEventListener("click", closeDropdown);
//enable scroll
  closeBtns[l].addEventListener("click", openScroll);
//end
}

var openSide = document.getElementById('ham-menu');
//using event listener, make clicking on the ham menu do the following func
openSide.addEventListener("click", openSlideMenu);
openSide.addEventListener("click", stopScroll);

/*function for opening the side menu */
function openSlideMenu(){
    document.getElementById('whole-page01').classList.toggle('sideopen');
    document.getElementById('ham-menu').classList.add('dont-show');
    document.getElementById('close-side-menu-div').style.display = 'block';
//assign the 480px media query to the variable "mq"
  var mq = window.matchMedia ( "(max-width: 480px)");
  //if the window matches 480px, use side menu sml class, or use side menu norm if not
    if (mq.matches) {
      document.getElementById('sidenav').classList.toggle("side-menu-sml");
    }
    
    else {
      document.getElementById('sidenav').classList.toggle("side-menu-norm");
    }
  }
/*closing the sm */
  function closeSlideMenu(){
//if the window width is 768px or less, show the ham menu
    var mq = window.matchMedia ( "(max-width: 768px)");
      if (mq.matches) {
        document.getElementById('ham-menu').classList.remove('dont-show');
      }

      else {
        document.getElementById('ham-menu').classList.add('dont-show');
      }
//closing the side menu
    document.getElementById('close-side-menu-div').style.display = 'none';
    document.getElementById('sidenav').classList.remove("side-menu-norm");
    document.getElementById('sidenav').classList.remove("side-menu-sml");
    document.getElementById('whole-page01').classList.remove("sideopen");
}

//////////////////////////////////////////

//HERE the magic happens - fade in content//

//////////////////////////////////////////////////
let elementsToShow0 = document.querySelectorAll('.content-row01');
let elementsToShow1 = document.querySelectorAll('.content01'); 
// Detect request animation frame
let scroll01 = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 3000/60);};

function loop01() {

Array.prototype.forEach.call(elementsToShow0, function(element){
    if ((isInView(element)) && (element.classList.contains("dont-show"))) {
      element.classList.add('show-content');} 
   // else {
    //  element.classList.remove('show-content');}
    });

Array.prototype.forEach.call(elementsToShow1, function(element){
    if ((isInView(element)) && (element.classList.contains("dont-show-side"))) {
      element.classList.add('show-content-side');
     }
    });

scroll01(loop01);}

// Call the loop for the first time
loop01();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isInView(el) {
  let box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

////////////////////////////////////////

//FUNKCIJA ZA Screen Size Check// DVE MOGUCE

////////////////////////////////////////////////

//Napravio za paralax elemente najvise//
function isScreenCorrect() {

  var width = window.innerWidth;

    if (width >= 769) {
      window.addEventListener('scroll', singPrlx);
      window.addEventListener('scroll', singPrlxOw);
    }

    if (width < 769) {
      window.removeEventListener('scroll', singPrlx);
      window.removeEventListener('scroll', singPrlxOw);
//this removes the event listener for side social menu, rest is in the function SCR CHANGE
      window.removeEventListener('scroll', scrollSideM);

//reset elements positions PRLX//

    var prlxClassClose = document.getElementsByClassName('prlx-closer');
    var prlxClassCloseOw = document.getElementsByClassName('prlx-closer-ow');

    for (var b = 0; b < prlxClassClose.length; b++) {
      prlxClassClose[b].style.transform = `translate3d(0, 0px, 0)`;
    }

    for (var w = 0; w < prlxClassCloseOw.length; w++) {
      prlxClassCloseOw[w].style.transform = `translate3d(0, 0px, 0)`;
    }
  }
}

isScreenCorrect();
window.addEventListener('resize', isScreenCorrect);
/////////////////////////////////////////////////////////////////////////
//ORIGINAL FUNC FOR SCR CHANGE - Made for the open and close site function prim
function screenChange() {

  if ((mmm.matches) && (mmm2.matches) && (mediumWin == 0)) {
      onResizeCloseOpen();
      mediumWin = 1;
      smallWin = 0;
      largeWin = 0;
//side social menu to show in footer
      contactNav.classList.add("social-menu");
  }

  if ((mms.matches) && (mms2.matches) && (smallWin == 0)) {
      onResizeCloseOpen();
      smallWin = 1;
      mediumWin = 0;
      largeWin = 0;

      contactNav.classList.add("social-menu");
  }

  if ((largeWin == 0) && (mml.matches) && (mml2.matches)) {
      onResizeCloseOpen();
      largeWin = 1;
      mediumWin = 0;
      smallWin = 0;

      window.addEventListener('scroll', scrollSideM);

      scrollSideM();
  }
}

window.addEventListener('resize', screenChange);
//run run run
screenChange();


////////////////////////////////////////

//STOP scroll//

////////////////////////////////////////////////

var contin = document.getElementById('sidenav');
var htm = document.getElementsByTagName('html')[0];
var bod = document.getElementsByTagName('body')[0];

function stopScroll() {
    if (contin.classList.contains('side-menu-norm')) {
      bod.classList.add("stopscroll");
    } 
    if (contin.classList.contains('side-menu-sml')) {
      bod.classList.add("stopscroll");
      //document.getElementById('page01').style.visibility = 'hidden'; - this is to lighten up the load
    } 
}

function openScroll() {
      bod.classList.remove("stopscroll");
     // document.getElementById('page01').style.visibility = 'visible'; - uncomment this if doing the same to the above commented line
}