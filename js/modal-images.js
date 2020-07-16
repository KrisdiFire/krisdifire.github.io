/*document.getElementById("myModal").style.display = "none";
var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("image_galery");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){
    modal.style.display = "block";
       modalImg.src = this.src;
       captionText.innerHTML = this.alt;
 };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
   modal.style.display = "none";
};

var modalBtns = document.querySelector(".modal-btns");

modalBtns.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains('prev-btn') || target.classList.contains('next-btn')) {
    var direction = target.classList.contains('prev-btn') ? -1 : 1;
    var currImg = document.querySelector(".modal-gallery > img[src='" + mainImg.src + "']");
    var imgsUrls = [...allModalImgs].map(({src}) => src);
    var nextIndex = imgsUrls.indexOf(currImg.src)  + direction;
    nextIndex = nextIndex === imgsUrls.length ? 0 : nextIndex < 0 ? imgsUrls.length - 1 : nextIndex;
    mainImg.src = imgsUrls[nextIndex];
  }
});*/


/*zatvara modal sa slikama jer se po ucitavanju automatski otvarao*/
document.getElementById("myModal").style.display = "none";

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
/*Here the magic happens - animacija slika u galeriji*/

  // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
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

// Call the loop for the first time
loop();

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
