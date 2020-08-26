/*funkcija za parallax ndf*/
function parallax() {
//asignujemo svaki od elemenata na varijablu
    var s = document.getElementById("prlx-01");
    var o = document.getElementById("prlx-02");
    var b = document.getElementById("prlx-03");
    var e = document.getElementById("prlx-04");
    
//brzina kojom ide element ka vrhu str (yPos 0), veci offset=sporiji skroll gore
  var yPos = 0 - window.pageYOffset/-46;  
  //element drzimo na 10rem od yPos (koji je 0)
  s.style.top = 28 + yPos + "vh";
//isto, ali za drugi element
  var yPos2 = 0 - window.pageYOffset/22;  
  o.style.top = 75 + yPos2 + "vh";

  var yPos3 = 0 - window.pageYOffset/-110;  
  b.style.top = -30 + yPos3 + "rem";

  var yPos4 = 0 - window.pageYOffset/-110;  
  e.style.top = -10 + yPos4 + "rem";

}
  //listener koji prati skroll na stranici i po tome vrsi funkciju parralax
  window.addEventListener("scroll", function(){
    parallax(); 
  });

