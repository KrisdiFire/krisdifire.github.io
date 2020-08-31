/*funkcija za parallax ndf*/
function parallax() {
//asignujemo svaki od elemenata na varijablu
    var s = document.getElementById("prlx-01");
    var o = document.getElementById("prlx-02");
    var b = document.getElementById("prlx-03");
    var e = document.getElementById("prlx-04");
    var t = document.getElementById("prlx-seg01");
    var y = document.getElementById("prlx-seg02");
    var u = document.getElementById("prlx-seg03");
    var q = document.getElementById("prlx-seg04");

    //za screensize
    var mq = window.matchMedia ( "(max-width: 780px)");
    
//brzina kretanja elementa - veci offset=sporije pomeranje gore/dole
  var yPos = 0 - window.pageYOffset/-46;  
  //element drzimo na 10rem od yPos (koji je 0)
  s.style.top = 28 + yPos + "vh";
//isto, ali za druge elemente
  var yPos2 = 0 - window.pageYOffset/22;  
  o.style.top = 75 + yPos2 + "vh";

  var yPos3 = 0 - window.pageYOffset/-110;  
  b.style.top = -30 + yPos3 + "rem";

  var yPos4 = 0 - window.pageYOffset/-110;  
  e.style.top = -10 + yPos4 + "rem";
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

