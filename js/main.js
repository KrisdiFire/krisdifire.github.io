//////////////////////////////////////////
//If JS is disabled fallback//
//////////////////////////////////////////////////
let showRow = document.querySelectorAll('.content-row01');
let showColumn = document.querySelectorAll('.content01'); 
let showListWDot = document.querySelectorAll('.list-02'); 
let listPullDown = document.querySelectorAll('.pullDown'); 
let showListBlank = document.querySelectorAll('.list-blank'); 
let separatorJSOff = document.querySelectorAll('.separator01'); 
//var za gallery stranicu, da se animiraju slike pri scroll-u
let elementsToShow = document.querySelectorAll('.show-on-scroll'); 
//funkcija kojom dodajem stil klasama dont-show i -side, da
//ukoliko je JS dissabled, sadrzaj str bude renderovan umesto opacity = 0;
function ifJSDisabled() {
Array.prototype.forEach.call(showRow, function(element){
    if (element.classList.contains("dont-show")) {
      element.style.opacity = "0";
      element.style.transform = 'translateY(4rem)';
    }
});
Array.prototype.forEach.call(showColumn, function(element){
  if (element.classList.contains("dont-show-side")) {
      element.style.left = "-250%";}
  if (element.classList.contains("img-bck-inner")) {
      element.classList.add("dont-show");
      element.style.opacity = "0";}
});
Array.prototype.forEach.call(listPullDown, function(element){
  if (element.classList.contains("pullDown")) {
      element.style.transform = "translateY(150%)";}
});
Array.prototype.forEach.call(showListBlank, function(element){
  if (element.classList.contains("pullDown")) {
      element.style.transform = "translateY(150%)";}
});
Array.prototype.forEach.call(separatorJSOff, function(element){
        if (element.classList.contains("js-remove")) {
            element.style.display = "none";}
});
Array.prototype.forEach.call(elementsToShow, function(element){
  if (element.classList.contains("image_gallery")) {
      element.classList.add('i-photo');}
});
}
ifJSDisabled();
//If not, do this//
// Detect request animation frame
// let scroll01 = window.requestAnimationFrame ||
// IE Fallback
// function(callback){ window.setTimeout(callback, 3000/60);};

function loopThroughElements() {

Array.prototype.forEach.call(showRow, function(element){
    if ((isInView(element)) && (element.classList.contains("dont-show") && element.classList.contains('show-content') == false)) {
      element.classList.add('show-content');} 
    });
Array.prototype.forEach.call(showColumn, function(element){
    if ((isInView(element)) && (element.classList.contains("dont-show-side")  && element.classList.contains('show-content-side') == false)) {
      element.classList.add('show-content-side');
      }
    if ((isInView(element)) && (element.classList.contains("dont-show")  && element.classList.contains('show-content-img') == false)) {
      element.classList.add('show-content-img');
      element.classList.remove('dont-show');
      element.style.opacity = "1";
      }
/*Array.prototype.forEach.call(showListWDot, function(element){
    if ((isInView(element))) {
      element.parentNode.classList.add('show-list-item');} 
    });
Array.prototype.forEach.call(showListBlank, function(element){
      if ((isInView(element))) {
        element.parentNode.classList.add('show-list-item');} 
    });*/
      Array.prototype.forEach.call(listPullDown, function(element){
        if ((isInView(element)) && element.classList.contains('show-list-item') == false) {
          element.parentNode.classList.add('show-list-item');} 
        });
//Za gallery str
      Array.prototype.forEach.call(elementsToShow, function(element){
        if (isInView(element) && element.classList.contains('is-visible') == false) {
            element.classList.add('is-visible');}
      //    else {
      //    element.classList.remove('is-visible');
      //  }
      });
  });
// scroll01(loopThroughElements);
}
// Call the loop for the first time
loopThroughElements();
window.addEventListener('scroll', loopThroughElements);

////////////////////////////////////////
//FUNCTION To show the button after scrolling 500px down from the top//
////////////////////////////////////////////////
let mybutton = document.getElementById("up");

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
//HIDE MMenu on scroll down//
////////////////////////////////////////////////
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {

let currentScrollPos = window.pageYOffset;
let mainMenu = document.getElementsByClassName('main-menu')[0];
  if (prevScrollPos > currentScrollPos) {
    mainMenu.style.transform = "translateY(0)";
  } else {
    mainMenu.style.transform = "translateY(-3rem)";
  }
  prevScrollPos = currentScrollPos;
  scrollFunction();
};

////////////////////////////////////////
//Racunica koliko je str odskrolovano od 0 - 100%//
////////////////////////////////////////////////

var contactNav = document.getElementById("soc-menu");

let bodyHeightFS = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight,
    viewportPercFS = 0,
    totalBodyScrolledPercFS = 0,
    bodyScrolledFS = 0;

let scrolly = document.getElementById("scrolly"),
    scrolledAm = document.getElementById("scrolled-am"),
    scrollHand = document.getElementById("scroll-hand");

function scrollBar() {

bodyHeightFS = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;
//koliko se odskrolovalo pocevsi od vrha - nikad ne dodje do 100% jer mu fali window inner height
bodyScrolledFS = (Math.max(document.documentElement.scrollTop, document.body.scrollTop, document.body.offsetTop));
//koliko je totalno stranice odskrolovano u procentima (Math.round-uj ovo da bude od 1 - 100 celi br)
totalBodyScrolledPercFS = (bodyScrolledFS / bodyHeightFS * 100);
//scroll ammount za progressBar tj scrollbar - ako ovo postavim van ove funk, ne update-uje se kako treba, naci zasto//
scrolledAm.style.transform = `translate3d(0,${totalBodyScrolledPercFS}vh, 0)`;
}
scrollBar();

////////////ZA HOLD DOWN SCROLL TP//////////////////
  let attachment = false, 
      lastPosition, 
      position;

//scroll to a part of page
  scrolly.addEventListener("mousedown", function(e){
    if( e.type === "mousedown" ) { 
      attachment = true; 
      position = e.clientY / scrolly.offsetHeight * bodyHeightFS; 
      window.scrollTo({
      top: position});
      }
    });
//enable scrolling on mousepress + mousemove
    scrolly.addEventListener("mousemove", function(e){
      if( e.type === "mousemove" && attachment === true ) {
        position = e.clientY / scrolly.offsetHeight * bodyHeightFS;
        window.scrollTo({
        top: position});
        document.documentElement.style.scrollBehavior = "initial";
      }
    });
//might be unnecessary, but does similar to the one below
  /*  scrolly.addEventListener("mouseup", function(e){
      if( e.type === "mouseup" ) { 
        attachment = false; 
        document.documentElement.style.scrollBehavior = "smooth";
      }
    });*/
//when not pressing mouse button disable scrolling
    window.addEventListener("mouseup", function(e){
      if( e.type === "mouseup" ) { 
        attachment = false; 
        scrolly.classList.remove('hoveredScrolly');
        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.classList.remove("blockSelect");
      }
    });
//enables scrolling through the page even when not moving over scrolly
    window.addEventListener("mousemove", function(e){
      if( e.type === "mousemove" && attachment === true ) { 
        position = e.clientY / scrolly.offsetHeight * bodyHeightFS;
        document.documentElement.style.scrollBehavior = "initial";
        document.documentElement.classList.add("blockSelect");
        window.scrollTo({
        top: position});
      }
    });
//for scrolly to stay as hovered
    window.addEventListener('mousedown', function(e) {
      if(e.type === 'mousedown' && attachment === true) {
        scrolly.classList.add('hoveredScrolly');
      }
    });

////////////SIDE SOCIAL MENU///////////////
function sideSocialMenuShow() {

  let lowPerc = 55,
  highPerc = 80;

//kad je izmedju social side
if (totalBodyScrolledPercFS > lowPerc) {
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
 if (totalBodyScrolledPercFS > highPerc) {
  contactNav.classList.remove("social-menu-side");
  contactNav.classList.remove("soc-opacity-0");
  }

//var to check if were on the gallery page, and turn off side soc menu
let inGallery = document.getElementsByClassName('gallery_full')[0];
if (inGallery!=null) {
    // window.removeEventListener("scroll", sideSocialMenuShow);
    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");
    contactNav.classList.add("social-menu");
}
else {
    // window.addEventListener("scroll", sideSocialMenuShow);
}
}
sideSocialMenuShow();
window.addEventListener("scroll", sideSocialMenuShow);

////////////////////////////////////////
//FUNKCIJA ZA PARALAX//
////////////////////////////////////////////////
let closePrlx = document.querySelectorAll(".prlx-close");
let medPrlx = document.querySelectorAll(".prlx-mult-med");
let farPrlx = document.querySelectorAll(".prlx-mult-sm");
  
function scrollPrlxCubes() {
  let closeY = window.pageYOffset/34;
  let mediumY = window.pageYOffset/66;
  let farY = window.pageYOffset/99;
  for (let i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translate3d" + "(" + "0," + closeY  + "rem" + ", 0" + ")";
}
  for (let o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
}
  for (let p = 0; p < farPrlx.length; p++) {
      farPrlx[p].style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
  }
}
window.addEventListener("scroll", scrollPrlxCubes);

// function prlxElements() {

//   let prlxClassClose = document.getElementsByClassName('prlx-closer');
    
//     for (let b = 0; b < prlxClassClose.length; b++) {

//       let win_off = window.pageYOffset,
//           win_h = window.innerHeight,
//           elem_h = prlxClassClose[b].offsetHeight,
//           elem_off = prlxClassClose[b].offsetTop,
//           elemPar_h = prlxClassClose[b].parentNode.clientHeight,
//           elemPar_off = prlxClassClose[b].parentNode.offsetTop,
//           elemParPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

//           diff = elem_off - elemPar_h,
//           max = Math.max(elem_h, win_h),
//           speed = diff / max,

//           cont_scrolled = win_off - elemParPar_off - elemPar_off,
//           cont_scrolled0 = cont_scrolled + win_h/2 - elemPar_h/2,
          
//           value = Math.round(cont_scrolled0 * speed/2);

//         //  if (isInView(prlxClassClose[b])) {
//           prlxClassClose[b].style.transform = `translate3d(0,${value * 1}px, 0)`;
//      // }
//     }
//   }

////////////////////////////////////////
//SIDE MENU PART// - should rewrite
////////////////////////////////////////////////

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropbtn");
//loop
for (let i = 0; i < dropdown.length; i++) {
  //add an event listener for the following function
  dropdown[i].addEventListener("click", function() {
//activate the class active
    this.classList.toggle("active");
//variable using the active classes next sibling
    var dropdownContent = this.nextElementSibling;
//if the container has display block, then put display none onto it
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      dropdownContent.nextElementSibling.style.borderTop = "unset";
    } 
//if it doesnt, close all other dropdowns and display this element
    else {
      closeDropdown();
      dropdownContent.style.display = "block";
      dropdownContent.nextElementSibling.style.borderTop = "solid white 1px";
    }
  });
}

//closes all dropdowns
function closeDropdown() {
//take all elements with class dropbtn
  var dropActive = document.querySelectorAll('.dropbtn');
//loop through all the elements and remove the active class from them
  for (let o = 0; o < dropActive.length; o++) {
    dropActive[o].classList.remove("active"); 
  }
//close dropdowns
  var myClasses = document.querySelectorAll('.dropdown-container');
//do not display dropdown containers
for (let i = 0; i < myClasses.length; i++) {
    myClasses[i].style.display = 'none';
  }
  var dropdown = Array.from(document.getElementsByClassName("dropbtn"));
  var aboutBut = document.getElementsByClassName("about")[0];
    if (aboutBut != null) {aboutBut.style.borderTop = "unset";}
  dropdown.forEach(borderTop);
  function borderTop (element) {
  element.style.borderTop = "unset";
  }
}

var sideNav = document.getElementById('sidenav');
var wholePage = document.getElementById('whole-page01');
var openSideHam = document.getElementById('ham-menu');
var closeSideDiv = document.getElementById('close-side-menu-div');
var btnClose = document.getElementById('btn-close-div');
//using event listener, make clicking on the ham menu do the following func
openSideHam.addEventListener("click", openSlideMenu);
openSideHam.addEventListener("click", stopScroll);
//assign the 480px media query to the variable "mq"
var mq = window.matchMedia ( "(max-width: 480px)");

/*function for opening the side menu */
function openSlideMenu(){
  //  wholePage.classList.toggle('sideopen');
    if (btnClose.style.opacity == 0) {
      btnClose.style.opacity = 1;
    }
    openSideHam.classList.add('dont-show-ham');
    closeSideDiv.style.height = '100vh';
    closeSideDiv.style.transitionDelay = "0.5s";
    sideNav.style.transitionDelay = "0s";

////close side menu////
var closeBtns = document.getElementsByClassName("close-side-menu");
//loop loop through all the elements
for (var l = 0; l < closeBtns.length; l++) {
/*add event listeners to the elements for the following functions*/
  closeBtns[l].addEventListener("click", closeSlideMenu);
//enable scroll
  closeBtns[l].addEventListener("click", function() {
    setTimeout(function () {
      bod.classList.remove("stopscroll");}, 750);
    });
//end
}

//if the window matches 480px, use side menu sml class, or use side menu norm if not
    if (mq.matches) {
      sideNav.classList.toggle("side-menu-sml");
      sideNav.style.width = "100%";
      sideNav.style.backgroundColor = "black";
      sideNav.style.transitionDelay = "0s";
      closeSideDiv.style.opacity = '0';
    }
    
    else {
      sideNav.classList.toggle("side-menu-norm");
      sideNav.style.width = "19rem";
      sideNav.style.backgroundColor = "indianred";
      closeSideDiv.style.opacity = '1';
      sideNav.style.transitionDelay = "0s";
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
      
      btnClose.style.opacity = 0;
      
//closing the side menu
      if (mq.matches) {
        sideNav.style.transitionDelay = "0s";
      }
      else {
        sideNav.style.transitionDelay = "0.75s";
      }

    closeSideDiv.style.height = '0%';
    closeSideDiv.style.transitionDelay = "0s";
    
    sideNav.classList.remove("side-menu-norm");
    sideNav.classList.remove("side-menu-sml");
    wholePage.classList.remove("sideopen");
    closeDropdown();
}

////////////////////////////////////////
//GALLERY script//
////////////////////////////////////////////////

//Funkcija za otvaranje odredjene kategorije
//naziv funk (u zagradu ce se ubaciti koja klasa kasnije)
function filterContent(contentname){
  let ise = document.getElementsByClassName("gallery_spacing");
  //var koji uzima sve u toj klasi
  let ol = document.getElementsByClassName(contentname);
  //za svaki element te klase ce da odradi funk opens
  Array.prototype.forEach.call(ol, function(opens) {
  //pre nego sto odradi svoju funkciju, uzimamo sve galerije i sakrivamo ih klasom dsg
      Array.prototype.forEach.call(ise, function(element) {
      element.classList.add('dont-show-gallery');
      });
  //opens skida klasu kojom sakrivamo odredjenu galeriju, dok ostale ostaju skrivene
      opens.classList.remove("dont-show-gallery");
  
});
}

//Ovim assignujemo koji kontent otvara koje dugme/ad
//filteru assign sve elem s klasom .filteri, i za svaki od njih vrsimo funk preko (bilo koji naziv)
const filteri = document.querySelectorAll('.filter').forEach(function (item) {
  //na te elemente apliciramo event listener-a uz funkciju koja ce nalepiti koji kontent
  //otvara po tome da li sadrzi odredjenu klasu. [ako u zagr pored funk ubacim parametar
  //i njega koristim umesto "this", nece raditi = treba eksperimentisati]
    item.addEventListener("click", function() {
    
    if (this.classList.contains("illu_gal")) {
      filterContent('illu_gallery');
    }
    if (this.classList.contains("logo_gal")) {
      filterContent('logo_gallery');
    }
    if (this.classList.contains("banner_gal")) {
      filterContent('banner_gallery');
    }
    if (this.classList.contains("fun_gal")) {
      filterContent('fun_gallery');
    }
    if (this.classList.contains("full_gal")) {
      filterContent('gallery_full');
    }
  });
  });

////////////////////////////////////////
//FUNKCIJA ZA Screen Size Check// DVE MOGUCE
////////////////////////////////////////////////

var bodi = document.getElementsByTagName('body')[0];

function largeOrSmallScreen() {

  let width = window.innerWidth;

    if (width >= 769) {
      // window.addEventListener('scroll', prlxElements);
      bodi.classList.add("noSbar");
      document.documentElement.classList.add("noSbar");
      scrolly.style.display = "block";

      scrollBar();
      window.addEventListener('scroll', scrollBar);
      sideSocialMenuShow();
      addEventListener("scroll", sideSocialMenuShow);
    }

    if (width < 769) {
      // window.removeEventListener('scroll', prlxElements);
//this removes the event listener for side social menu, rest is in the function SCR CHANGE
      window.removeEventListener('scroll', scrollBar);

      removeEventListener("scroll", sideSocialMenuShow);
      contactNav.classList.add("social-menu");
      contactNav.classList.remove("social-menu-side");
//removes the class on the body/html that keeps the browser sidebar hidden
      document.documentElement.classList.remove("noSbar");

//reset elements positions PRLX//
    let prlxClassClose = document.getElementsByClassName('prlx-closer');

    for (let b = 0; b < prlxClassClose.length; b++) {
      prlxClassClose[b].style.transform = `translate3d(0, 0px, 0)`;
    }
  }
}

largeOrSmallScreen();
window.addEventListener('resize', largeOrSmallScreen);

/////////////////////////////////////////////////////////////////////////
//FUNC FOR SCR CHANGE if the previous wasn't enough
///////////////////////////////////////////////////////
let mml = window.matchMedia ("(max-width: 10000px)");
let mmm = window.matchMedia ("(max-width: 768px)");
let mms = window.matchMedia ("(max-width: 480px)");

let mml2 = window.matchMedia ("(min-width: 769px)");
let mmm2 = window.matchMedia ("(min-width: 481px)");
let mms2 = window.matchMedia ("(min-width: 200px)");
//used to define current win size and stop the script from running until
//another screensize change
let largeWin = 0;
let mediumWin = 0;
let smallWin = 0;

function screenChange() {

  if ((mms.matches) && (mms2.matches) && (smallWin === 0)) {
    //  onResizeCloseOpen();
      smallWin = 1;
      mediumWin = 0;
      largeWin = 0;

      contactNav.classList.add("social-menu");
      contactNav.classList.remove("social-menu-side");
      contactNav.classList.remove("soc-opacity-0");

      sideNav.style.display = "block";
  }

  if ((mmm.matches) && (mmm2.matches) && (mediumWin === 0)) {
    //  onResizeCloseOpen();
      mediumWin = 1;
      smallWin = 0;
      largeWin = 0;
//side social menu to show in footer
      contactNav.classList.add("social-menu");
      contactNav.classList.remove("social-menu-side");
      contactNav.classList.remove("soc-opacity-0");

      sideNav.style.display = "block";
  }

  if ((largeWin === 0) && (mml.matches) && (mml2.matches)) {
    //  onResizeCloseOpen();
      largeWin = 1;
      mediumWin = 0;
      smallWin = 0;

      sideNav.style.display = "none";
  }
}

screenChange();
window.addEventListener('resize', screenChange);

/////////////////////////////////
//IS element in view funk//
//////////////////////////////////////
function isInView(el) {
  let box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

////////////////////////////////////////
//STOP scroll//
////////////////////////////////////////////////

let htm = document.getElementsByTagName('html')[0];
let bod = document.getElementsByTagName('body')[0];

function stopScroll() {
    if (sideNav.classList.contains('side-menu-norm')) {
      bod.classList.add("stopscroll");
    } 
    if (sideNav.classList.contains('side-menu-sml')) {
      bod.classList.add("stopscroll");
    } 
}
function openScroll() {
      bod.classList.remove("stopscroll");
}

///UNUSED///
////////////////////////////////////////
//Function before the site opens, and on screen change//
////////////////////////////////////////////////
/*
let opel = document.getElementById("op-l");
let oper = document.getElementById("op-r");

let opel1 = document.getElementById("s-l-l");
let oper1 = document.getElementById("s-l-r");
//letiables for window sizes
  let mml = window.matchMedia ("(max-width: 10000px)");
  let mmm = window.matchMedia ("(max-width: 768px)");
  let mms = window.matchMedia ("(max-width: 480px)");

  let mml2 = window.matchMedia ("(min-width: 769px)");
  let mmm2 = window.matchMedia ("(min-width: 481px)");
  let mms2 = window.matchMedia ("(min-width: 200px)");
//used to define current win size and stop the script from running until
//another screensize change
let largeWin = 0;
let mediumWin = 0;
let smallWin = 0;

let hiwL = document.getElementsByClassName("hiw")[0];
let hiwR = document.getElementsByClassName("hiw")[1];

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
*/