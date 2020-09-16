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