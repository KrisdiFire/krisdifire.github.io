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

// Skroll nagore pri kliku na dugme
function upTop() {
  document.body.scrollTop = 0; // Za Safari
  document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE and Opera
}


  /*funkcija za otvaranje kontenta*/
//function openContent(contentname) {
 // closeContent();
 // document.querySelectorAll(contentname).classList.toggle("show-content");
//}

/*Specijalna funkcija za otvaranje prednje strane (koja se inicijalno prikazuje)*/
//function openContentAll() {
//  closeContent();
//  document.querySelectorAll(".dont-show").classList.add(".show-content");
//}

/*funkcija koja zatvara sav kontent koji nije potreban*/
//function closeContent() {
  //var rl = document.querySelectorAll(".dont-show");
    //[].forEach.call(rl, function(closes) {
      //closes.classList.remove("show-content");});
//}

//openContentAll();
