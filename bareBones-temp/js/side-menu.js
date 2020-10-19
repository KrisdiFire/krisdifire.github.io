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

///////////////////////////////////////////////////////////

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

//////////////Stop scroll////////////////

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