/*Here the magic happens - animacija kontenta*/

  // Detect request animation frame
  var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback){ window.setTimeout(callback, 3000/60);};
  var elementsToShow2 = document.querySelectorAll('.content-wrapper01'); 
  
  function loop01() {
  
  Array.prototype.forEach.call(elementsToShow2, function(element){
  if (isElementInViewport(element)) {
  element.classList.add('show-content');
  } else {
  element.classList.remove('show-content');
  }
  });
  
  scroll(loop01);
  }
  
  // Call the loop for the first time
  loop01();
  
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
