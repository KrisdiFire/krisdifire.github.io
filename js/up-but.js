//Dugme za odlazak na top
mybutton = document.getElementById("up");

// Pokazati dugme tek posle skrolanja ka dole
window.onscroll = function() {scrollFunction();};

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