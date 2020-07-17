/*funkcija za parallax u headeru na front page*/
  function parallax() {
    var s = document.getElementById("willkommen");
  var yPos = 0 - window.pageYOffset/22;  
  s.style.top = 10 + yPos + "rem";}

window.addEventListener("scroll", function(){
    parallax(); 
});

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
