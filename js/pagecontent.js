/*funkcija za otvaranje kontenta*/
function openContent(contentname) {
    closeContent();
    document.getElementById('banner-wrap').style.height = '10rem';
    document.getElementById(contentname).classList.toggle("show-content");
    anot();
  }
 /*anot je specifican tekst koji se prikazuje u headeru pojedinacnih stranica*/
  function anot(){

    var o = document.getElementById('content-design');
    var r = document.getElementById('anot-design');
    var p = document.getElementById('content-about');
    var t = document.getElementById('anot-about');
    var q = document.getElementById('content-prog');
    var y = document.getElementById('anot-web');

    if (o.classList.contains('show-content')) {r.style.display = "block";}
      else {r.style.display = "none";}
    if (p.classList.contains('show-content')) {t.style.display = "block";}
      else {t.style.display = "none";}
    if (q.classList.contains('show-content')) {y.style.display = "block";}
      else {y.style.display = "none";}
  }
/*Specijalna funkcija za otvaranje prednje strane (koja se inicijalno prikazuje)*/
  function openContentFront(contentname) {
    closeContent();
    document.getElementById('banner-wrap').style.height = '40vh';
    document.getElementById("willkommen").classList.remove("dont-show");
    document.getElementById(contentname).classList.toggle("show-content");
    anot();
  }
  /*funkcija koja zatvara sav kontent koji nije potreban*/
  function closeContent() {
    document.getElementById("front-page").classList.add("dont-show");
    document.getElementById("willkommen").classList.add("dont-show");
    var rl = document.querySelectorAll(".content-wrapper");
      [].forEach.call(rl, function(closes) {
        closes.classList.remove("show-content");});
  }

/*funkcija za parallax u headeru na front page*/
  function parallax() {
    var s = document.getElementById("willkommen");
  var yPos = 0 - window.pageYOffset/22;  
  s.style.top = 7 + yPos + "vh";}

window.addEventListener("scroll", function(){
    parallax(); 
});
