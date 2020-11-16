/*Here the magic happens - fade in content*/
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