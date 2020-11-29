////////////////////////////////////////

//FUNCTION To show the button after scrolling 500px down from the top//

////////////////////////////////////////////////

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

//////////////////////////////////////
//Disable scrollbars on large

//////////////////////////////////////

////////////////////////////////////////

//Function before the site opens, and on screen change//
//not used atm
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

//FUNKCIJA ZA FADE-IN-OUT SideSocialMenu I racunica koliko je str odskrolovano od 0 - 100%//

////////////////////////////////////////////////

var contactNav = document.getElementById("soc-menu");

let bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight,
    viewportPerc = 0,
    totalBodyScrolledPerc = 0,
    bodyScrolled = 0;

let scrolly = document.getElementById("scrolly"),
    scrolledAm = document.getElementById("scrolled-am"),
    scrollHand = document.getElementById("scroll-hand");

function scrollSideM() {

  let lowPerc = 55,
  highPerc = 80;

bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;
//koliko se odskrolovalo pocevsi od vrha - nikad ne dodje do 100% jer mu fali window inner height
bodyScrolled = (Math.max(document.documentElement.scrollTop, document.body.scrollTop, document.body.offsetTop));
//koliko je totalno stranice odskrolovano u procentima (Math.round-uj ovo da bude od 1 - 100 celi br)
totalBodyScrolledPerc = (bodyScrolled / bodyHeight * 100);

//kad je izmedju social side
  if (totalBodyScrolledPerc > lowPerc) {
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
   if (totalBodyScrolledPerc > highPerc) {
    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");
    }

    //scroll ammount za progressBar tj scrollbar - ako ovo postavim van ove funk, ne update-uje se kako treba, naci zasto//
scrolledAm.style.height = totalBodyScrolledPerc + "vh";
}

scrollSideM();

////////////ZA HOLD DOWN SCROLL TP//////////////////

  let attachment = false, 
      lastPosition, 
      position;
    //  pageWOS = document.getElementById('whole-page01');

//scroll to a part of page
  scrolly.addEventListener("mousedown", function(e){
    if( e.type == "mousedown" ) { attachment = true; 
      position = e.clientY / scrolly.offsetHeight * bodyHeight; 
      window.scrollTo({
      top: position});
      document.documentElement.style.scrollBehavior = "initial";}
    });
//enable scrolling on mousepress + mousemove
    scrolly.addEventListener("mousemove", function(e){
      if( e.type == "mousemove" && attachment == true ){
        position = e.clientY / scrolly.offsetHeight * bodyHeight;
        window.scrollTo({
        top: position});
        document.documentElement.style.scrollBehavior = "initial";}
    });
//might be unnecessary, but does similar to the one below
    scrolly.addEventListener("mouseup", function(e){
      if( e.type == "mouseup" ) { 
        attachment = false; 
        document.documentElement.style.scrollBehavior = "smooth";
    }});
//when not pressing mouse button disable scrolling
    window.addEventListener("mouseup", function(e){
      if( e.type == "mouseup" ) { 
        attachment = false; 
        scrolly.classList.remove('hoveredScrolly');
        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.classList.remove("blockSelect");}
    });
//enables scrolling through the page even when not moving over scrolly
    window.addEventListener("mousemove", function(e){
      if( e.type == "mousemove" && attachment == true ) { 
        position = e.clientY / scrolly.offsetHeight * bodyHeight;
        document.documentElement.style.scrollBehavior = "initial";
        document.documentElement.classList.add("blockSelect");
        window.scrollTo({
        top: position});}
    });
//for scrolly to stay as hovered
    window.addEventListener('mousedown', function(e) {
      if(e.type == 'mousedown' && attachment == true) {
        scrolly.classList.add('hoveredScrolly');}
    });


////////////////////////////////////////

//FUNKCIJA ZA PARALAX//

////////////////////////////////////////////////

let closePrlx = document.getElementsByClassName("prlx-close");
let medPrlx = document.getElementsByClassName("prlx-mult-med");
let farPrlx = document.getElementsByClassName("prlx-mult-sm");
  
function scrollElement() {

  let closeY = window.pageYOffset/34;
  let mediumY = window.pageYOffset/66;
  let farY = window.pageYOffset/99;

  for (var i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translate3d" + "(" + "0," + closeY  + "rem" + ", 0" + ")";
  }

  for (var o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
  }

  for (var p = 0; p < farPrlx.length; p++) {
    farPrlx[p].style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
  }
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
          elemParPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

          diff = elem_off - elemPar_h,
          max = Math.max(elem_h, win_h),
          speed = diff / max,

          cont_scrolled = win_off - elemParPar_off - elemPar_off,
          cont_scrolled0 = cont_scrolled + win_h/2 - elemPar_h/2,
          
          value = Math.round(cont_scrolled0 * speed/2);

          prlxClassClose[b].style.transform = `translate3d(0,${value * 1}px, 0)`;

    }

  }

//////////////////////////////////////////

//HERE the magic happens - fade in content//

//////////////////////////////////////////////////
let elementsToShow0 = document.querySelectorAll('.content-row01');
let elementsToShow1 = document.querySelectorAll('.content01'); 
let elementsToShow2 = document.querySelectorAll('.list-02'); 
let elementsToShow3 = document.querySelectorAll('.pullDown'); 
let elementsToShow4 = document.querySelectorAll('.list-blank'); 
let elementsToShow5 = document.querySelectorAll('.separator01'); 
//funkcija kojom dodajem stil klasama dont-show i -side, da
//ukoliko je JS dissabled, sadrzaj str bude renderovan umesto opacity = 0;
function ifJSDisabled() {
Array.prototype.forEach.call(elementsToShow0, function(element){
    if (element.classList.contains("dont-show")) {
      element.style.opacity = "0";}
});
Array.prototype.forEach.call(elementsToShow1, function(element){
  if (element.classList.contains("dont-show-side")) {
      element.style.left = "-250%";}
      if (element.classList.contains("img-bck-inner-div")) {
        element.classList.add("dont-show");}
});
Array.prototype.forEach.call(elementsToShow3, function(element){
  if (element.classList.contains("pullDown")) {
      element.style.transform = "translateY(150%)";}
});
Array.prototype.forEach.call(elementsToShow4, function(element){
  if (element.classList.contains("pullDown")) {
      element.style.transform = "translateY(150%)";}
});
Array.prototype.forEach.call(elementsToShow5, function(element){
        if (element.classList.contains("js-remove")) {
            element.style.display = "none";}
});
}
ifJSDisabled();
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
    if ((isInView(element)) && (element.classList.contains("dont-show"))) {
      element.classList.add('show-content-img');
      element.classList.remove('dont-show');
      }

Array.prototype.forEach.call(elementsToShow2, function(element){
    if ((isInView(element))) {
      element.parentNode.classList.add('show-list-item');} 
    });
Array.prototype.forEach.call(elementsToShow4, function(element){
      if ((isInView(element))) {
        element.parentNode.classList.add('show-list-item');} 
      });
  });

scroll01(loop01);
}
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
      bodi.classList.add("noSbar");
      document.documentElement.classList.add("noSbar");
      scrolly.style.display = "block";
    }

    if (width < 769) {
      window.removeEventListener('scroll', singPrlx);
//this removes the event listener for side social menu, rest is in the function SCR CHANGE
      scrolledAm.style.height = 0 + "vh";
      window.removeEventListener('scroll', scrollSideM);
      document.documentElement.classList.remove("noSbar");
      //scrolly.style.display = "none";

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
    //  onResizeCloseOpen();
      mediumWin = 1;
      smallWin = 0;
      largeWin = 0;
//side social menu to show in footer
      contactNav.classList.add("social-menu");
      contactNav.classList.remove("social-menu-side");
      contactNav.classList.remove("soc-opacity-0");
  }

  if ((mms.matches) && (mms2.matches) && (smallWin == 0)) {
    //  onResizeCloseOpen();
      smallWin = 1;
      mediumWin = 0;
      largeWin = 0;

      contactNav.classList.add("social-menu");
      contactNav.classList.remove("social-menu-side");
      contactNav.classList.remove("soc-opacity-0");
  }

  if ((largeWin == 0) && (mml.matches) && (mml2.matches)) {
    //  onResizeCloseOpen();
      largeWin = 1;
      mediumWin = 0;
      smallWin = 0;

      window.addEventListener('scroll', scrollSideM);
  }
}

window.addEventListener('resize', screenChange);
//run run run
screenChange();

////////////////////////////////////////

//STOP scroll//

////////////////////////////////////////////////

var htm = document.getElementsByTagName('html')[0];
var bod = document.getElementsByTagName('body')[0];

function stopScroll() {
    if (sideNav.classList.contains('side-menu-norm')) {
      bod.classList.add("stopscroll");
    } 
    if (sideNav.classList.contains('side-menu-sml')) {
      bod.classList.add("stopscroll");
      //document.getElementById('page01').style.visibility = 'hidden'; - this is to lighten up the load
    } 
}

function openScroll() {
      bod.classList.remove("stopscroll");
     // document.getElementById('page01').style.visibility = 'visible'; - uncomment this if doing the same to the above commented line
}

////////////////////////////////////////

//SIDE MENU PART// - should rewrite

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

var sideNav = document.getElementById('sidenav');
var wholePage = document.getElementById('whole-page01');
var openSideHam = document.getElementById('ham-menu');
var closeSideDiv = document.getElementById('close-side-menu-div');
//using event listener, make clicking on the ham menu do the following func
openSideHam.addEventListener("click", openSlideMenu);
openSideHam.addEventListener("click", stopScroll);
//assign the 480px media query to the variable "mq"
var mq = window.matchMedia ( "(max-width: 480px)");

/*function for opening the side menu */
function openSlideMenu(){
    wholePage.classList.toggle('sideopen');
    openSideHam.classList.add('dont-show-ham');
    closeSideDiv.style.height = '100vh';

////close side menu////
//take all the elements in this class
var closeBtns = document.getElementsByClassName("close-side-menu");
//loop loop through all the elements
for (var l = 0; l < closeBtns.length; l++) {
/*add event listeners to the elements for the following functions*/
  closeBtns[l].addEventListener("click", closeSlideMenu);
//enable scroll
  closeBtns[l].addEventListener("click", function() {
    setTimeout(function () {
      bod.classList.remove("stopscroll");}, 500);
    });
//end
}

//if the window matches 480px, use side menu sml class, or use side menu norm if not
    if (mq.matches) {
      sideNav.classList.toggle("side-menu-sml");
      sideNav.style.width = "100%";
      sideNav.style.backgroundColor = "black";
      closeSideDiv.style.opacity = '0';
    }
    
    else {
      sideNav.classList.toggle("side-menu-norm");
      sideNav.style.width = "19rem";
      sideNav.style.backgroundColor = "indianred";
      closeSideDiv.style.opacity = '1';
    }
  }
/*closing the sm */
  function closeSlideMenu(){

      if (openSideHam.classList.contains('dont-show-ham')) {
        openSideHam.classList.remove('dont-show-ham');
      }

      else {
        openSideHam.classList.add('dont-show-ham');
      }
//closing the side menu
    closeSideDiv.style.height = '0%';
    sideNav.classList.remove("side-menu-norm");
    sideNav.classList.remove("side-menu-sml");
    wholePage.classList.remove("sideopen");
    closeDropdown();
}