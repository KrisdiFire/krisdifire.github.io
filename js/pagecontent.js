//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropbtn");
var i;

//loop
for (i = 0; i < dropdown.length; i++) {
  //dodaje se even listener sa funkcijom koja je u nastavku
  dropdown[i].addEventListener("click", function() {
//aktivira se klasa active na elementu koji otvaramo
    this.classList.toggle("active");
//varijabla "tog" elementa (i aktivacija njegove dece (a linkova u drop cont))
    var dropdownContent = this.nextElementSibling;
//ako je otvoren, tj ima display block, skida se to sa njega (drugim klikom na isti link se on zatvara)
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } 
//a ako nema, onda mu se dodaje display block, ali se prvo skida
//closeDrop funkcijom display block i class active sa svih ostalih linkova
//da bi oni bili zatvoreni i samo taj koji nam treba otvoren
    else {
      closeDropdown();
      dropdownContent.style.display = "block";
    }
  });
}

//Zatvara dropove pri kliku na drugi drop ili zatvaranju side menija
function closeDropdown() {
//uzima sve elemente sa klasom .dropbtn
  var dropActive = document.querySelectorAll('.dropbtn'),
  //pravimo varijable specijalno za ovo
  o = 0,
  p = dropActive.length;
//za svaki element, skida mu se active klasa
  for (o; o < p; o++) {
    dropActive[o].classList.remove("active"); 
  }
//uzimamo sve link kontejnere
  var myClasses = document.querySelectorAll('.dropdown-container'),
    i = 0,
    l = myClasses.length;
//stavljamo im display none da bi ih zatvorili
for (i; i < l; i++) {
    myClasses[i].style.display = 'none';
  }
}

////Zatvaranje Side Menija klikom na elemente sa close-si.. clasom////
//varijabla koja uzima sve elemente sa klasom close-side-menu
var closeBtns = document.getElementsByClassName("close-side-menu");
//varijabla kojom cemo da loopujemo kroz sve elemente te klase
var l;
//loop koji krece od prvog "l" i za svaki close-side-menu dodaje "l+1"
for (var l = 0; l < closeBtns.length; l++) {
/*za svaki element klase close-side-menu sa value "l+neki broj"(koji je dodat loop-om)
 dodaje event listener, da kada kliknes on poziva funkciju closeSlideM..*/
  closeBtns[l].addEventListener("click", closeSlideMenu);
  //zatvara i dropove
  closeBtns[l].addEventListener("click", closeDropdown);
//kraj
}

var openSide = document.getElementById('ham-menu');
//assignujemo event listener da pri kliku na taj element, on vrsi funk openSlideMenu
openSide.addEventListener("click", openSlideMenu);

///////////////////////////////////////////////////////////

/*Funk za otv side menija */
function openSlideMenu(){
    document.getElementById('whole-page').classList.toggle("sideopen");
    document.getElementById('ham-menu').classList.add('dont-show');
    document.getElementById('close-side-menu-div').style.display = 'block';
//assignujemo velicinu prozora od 480px varijabli "mq"
  var mq = window.matchMedia ( "(max-width: 480px)");
  //ako mq = 480px onda dodeljujemo sidenav-u klasu side-menu-sml
    if (mq.matches) {
      document.getElementById('sidenav').classList.toggle("side-menu-sml");
    }
    //ukoliko mq nije 480px, onda dodeljujemo side-menu-norm
    else {
      document.getElementById('sidenav').classList.toggle("side-menu-norm");
    }
  }
/*Funk za zatv side menija */
  function closeSlideMenu(){

    var mq = window.matchMedia ( "(max-width: 768px)");
      if (mq.matches) {
        document.getElementById('ham-menu').classList.remove('dont-show');
      }

      else {
        document.getElementById('ham-menu').classList.add('dont-show');
      }

    document.getElementById('close-side-menu-div').style.display = 'none';
    document.getElementById('sidenav').classList.remove("side-menu-norm");
    document.getElementById('sidenav').classList.remove("side-menu-sml");
    document.getElementById('whole-page').classList.remove("sideopen");
}

/*Here the magic happens - animacija kontenta*/

  // Detect request animation frame
  var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback){ window.setTimeout(callback, 3000/60);};
  var elementsToShow2 = document.querySelectorAll('.content-wrapper'); 
  
  function loop2() {
  
  Array.prototype.forEach.call(elementsToShow2, function(element){
  if (isElementInViewport(element)) {
  element.classList.add('show-content');
  } else {
  element.classList.remove('show-content');
  }
  });
  
  scroll(loop2);
  }
  
  // Call the loop for the first time
  loop2();
  
  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
  el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
  (rect.top <= 0&& rect.bottom >= 0)||
  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.top <= (window.innerHeight || document.documentElement.clientHeight))||
  (rect.top >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
  }


//Dugme za odlazak na top
mybutton = document.getElementById("up");

// Pokazati dugme tek posle skrolanja ka dole
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.classList.add("up-opacity");
  } else {
    mybutton.classList.remove("up-opacity");
  }
}

//za dugme koje baca usera na vrh str
//uzimamo element ID-em i assignujemo ga varijabli upTop1
var upTop1 = document.getElementById('up');
//assignujemo event listener da pri kliku na taj element, on vrsi funk upTop
upTop1.addEventListener("click", upTop);

// Funkcija za skroll nagore pri kliku na dugme
function upTop() {
  document.body.scrollTop = 0; // Za Safari
  document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE and Opera
}

/*Funk i varijabla za sporije prikazivanje background videa */
//element koji assignujemo varijablom vid
var vid = document.getElementById("background-video");
//pisemo funkciju
function setPlaySpeed() { 
  vid.playbackRate = 0.6;
} 
//pozivamo funkciju cim se ucita JS
setPlaySpeed();
