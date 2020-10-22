/*funkcija za parallax ndf*/
function parallax() {
//asignujemo svaki od elemenata na varijablu
    var s = document.getElementById("prlx-01");
    var o = document.getElementById("prlx-02");
    var b = document.getElementById("prlx-03");
    var e = document.getElementById("prlx-04");
    var c = document.getElementById("prlx-05");
    var d = document.getElementById("prlx-06");
    var f = document.getElementById("prlx-07");
    var g = document.getElementById("prlx-08");
    var h = document.getElementById("prlx-09");
   /* var t = document.getElementById("prlx-seg01");
    var y = document.getElementById("prlx-seg02");
    var u = document.getElementById("prlx-seg03");
    var q = document.getElementById("prlx-seg04");*/

    //za screensize
    var mq = window.matchMedia ("(max-width: 780px)");
    
//brzina kretanja elementa - veci offset=sporije pomeranje gore/dole
  var yPos = 0 - window.pageYOffset/-34;  
  //element drzimo na 10rem od yPos (koji je 0)
  s.style.top = -20 + yPos + "rem";
//isto, ali za druge elemente
  var yPos2 = 0 - window.pageYOffset/80;  
  o.style.top = -10 + yPos2 + "rem";

  var yPos3 = 0 - window.pageYOffset/-110;  
  b.style.marginTop = 10 + yPos3 + "rem";

  var yPos4 = 0 - window.pageYOffset/-90;  
  e.style.marginTop = -20 + yPos4 + "rem";

  var yPos5 = 0 - window.pageYOffset/-90;  
  c.style.marginTop = 10 + yPos5 + "rem";

  var yPos6 = 0 - window.pageYOffset/-90;  
  d.style.marginTop = 0 + yPos6 + "rem";

  var yPos7 = 0 - window.pageYOffset/-90;  
  f.style.marginTop = 10 + yPos7 + "rem";

  var yPos8 = 0 - window.pageYOffset/-34;  
  g.style.marginTop = 10 + yPos8 + "rem";

  var yPos9 = 0 - window.pageYOffset/-90;  
  h.style.marginTop = -35 + yPos9 + "rem";

/* eksperimenti
  if (mq.matches) {
    var yPos5 = 0 - window.pageYOffset/0;  
    t.style.top = 0 + yPos5 + "rem";

    var yPos6 = 0 - window.pageYOffset/0;  
    y.style.top = 0 + yPos6 + "rem";

    var yPos7 = 0 - window.pageYOffset/0;  
    u.style.top = 0 + yPos7 + "rem";

    var yPos8 = 0 - window.pageYOffset/0;  
    q.style.top = 0 + yPos8 + "rem";
  }
  
  else {
    var yPos5 = 0 - window.pageYOffset/140;  
    t.style.top = 15 + yPos5 + "rem";

    var yPos6 = 0 - window.pageYOffset/-180;  
    y.style.top = -7 + yPos6 + "rem";

    var yPos7 = 0 - window.pageYOffset/370;  
    u.style.top = 12 + yPos7 + "rem";

    var yPos8 = 0 - window.pageYOffset/170;  
    q.style.top = 18 + yPos8 + "rem";
  }
*/
}
  //listener koji prati skroll na stranici i po tome vrsi funkciju
  window.addEventListener("scroll", function(){
    parallax(); 
  });

