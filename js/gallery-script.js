/*Animate the images*/

  // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60);};

var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        }
      //  else {
       //   element.classList.remove('is-visible');
       // }
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    let box = el.getBoundingClientRect();
        return box.top < window.innerHeight && box.bottom >= 0;
}
////////////////////////////////////////////
////////////////////////////////////////////

//Funkcija za otvaranje odredjene kategorije

var ise = document.getElementsByClassName("gallery_spacing");

//filteri

function filterContent(contentname){

var ol = document.getElementsByClassName(contentname);

Array.prototype.forEach.call(ol, function(opens) {

    Array.prototype.forEach.call(ise, function(element) {
    element.classList.add('dont-show-gallery');
    });
  
    opens.classList.remove("dont-show-gallery");

});}

//filterContent();
////////////////////////////////////////////////////////////////////

const filteri = document.querySelectorAll('.filter').forEach(function (item) {

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
