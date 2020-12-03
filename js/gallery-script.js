/*Animate the images*/

// Detect request animation frame
let scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60);};

let elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
      //  else {
      //    element.classList.remove('is-visible');
      //  }
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

//Funkcija za otvaranje odredjene kategorije
let ise = document.getElementsByClassName("gallery_spacing");
//naziv funk (u zagradu ce se ubaciti koja klasa kasnije)
function filterContent(contentname){
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

});}

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
