function openContent(contentname) {
    closeContent();
    document.getElementById(contentname).classList.toggle("show-content");
  }

  function openContentFront(contentname) {
    closeContent();
    document.getElementById("willkommen").classList.remove("dont-show");
    document.getElementById(contentname).classList.toggle("show-content");
  }
  
  function closeContent() {
    document.getElementById("front-page").classList.add("dont-show");
    document.getElementById("willkommen").classList.add("dont-show");
    var rl = document.querySelectorAll(".content-wrapper");
      [].forEach.call(rl, function(closes) {
        closes.classList.remove("show-content");});
  }


  function parallax() {
    var s = document.getElementById("willkommen");
  var yPos = 0 - window.pageYOffset/22;  
  s.style.top = 20 + yPos + "em"; }

window.addEventListener("scroll", function(){
    parallax(); 
});

/*function parallax2() {
  var s = document.getElementById("druga_slika");
var yPos = 0 - window.pageYOffset/80;  
s.style.top = 0 + yPos + "em"; }

window.addEventListener("scroll", function(){
  parallax2(); 
});*/

/*function parallax3() {
  var s = document.getElementById("banner-img");
var yPos = 0 - window.pageYOffset/-14;  
s.style.top = 0 + yPos + "em"; }

window.addEventListener("scroll", function(){
  parallax3(); 
});
*/
