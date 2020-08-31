/*Here the magic happens - animacija slika u galeriji*/

var scroll = window.requestAnimationFrame ||

function(callback){ window.setTimeout(callback, 1000/60);};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

Array.prototype.forEach.call(elementsToShow, function(element){
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});

scroll(loop);
}

loop();

function isElementInViewport(el) {

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
  
////////////////////////////////////////////
//Funkcija za otvaranje odredjene kategorije

function filterContent(contentname){
    
  closeRestFilter();

var ol = document.getElementsByClassName(contentname);

[].forEach.call(ol, function(opens) {
  opens.classList.remove("dont-show-image");
  opens.classList.add("show-image");
});
}

//Funkcija koja otvara sve slike//
function filterAll(){
//prvo da zatvori sve
  closeRestFilter();
//gura separatorovom marginom sav content dole da se ne vidi animacija width i height-a
  document.getElementById('push-down-filter').style.marginBottom = "100vh";
  //dize gore (funkcija iz pagecontenta) da se ne vidi tranzicija dole
  upTop();
//uzima sve .image elemente
  var il = document.querySelectorAll(".image");
//za svaki element skida dont show image class
    [].forEach.call(il, function(opens) {
      opens.classList.remove("dont-show-image");});
//normalna margina separatora 
      function marginNorm() {
        document.getElementById('push-down-filter').style.marginBottom = "0rem";
      }
//funkcija koja dopusta da se sve slike prvo ucitaju pa tek onda vraca marginu u normalu
function marginNormTime() {
  setTimeout(marginNorm, 250);
}
//executuje vracanje margine 
marginNormTime(); 
}

/*funkcija koja zatvara sve galerije koje nisu potrebne*/
function closeRestFilter() {

  var rl = document.querySelectorAll(".image");

    [].forEach.call(rl, function(closes) {
      closes.classList.add("dont-show-image");});
    [].forEach.call(rl, function(opens) {
      opens.classList.remove("show-image");});
}

filterAll();


