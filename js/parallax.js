/*funkcija za parallax ndf*/
function parallax() {
//asignujemo svaki od elemenata na varijablu
    var s = document.getElementById("willkommen");
    var o = document.getElementById("willkommen2");
    //var b = document.getElementById("willkommen3");
//brzina kojom ide element ka vrhu str (yPos 0), veci offset=sporiji skroll gore
  var yPos = 0 - window.pageYOffset/46;  
  //element drzimo na 10rem od yPos (koji je 0)
  s.style.top = 10 + yPos + "rem";
//isto, ali za drugi element
  var yPos2 = 0 - window.pageYOffset/22;  
  o.style.top = 42 + yPos2 + "rem";

  //var yPos3 = 0 - window.pageYOffset/22;  
  //b.style.top = 0 + yPos3 + "rem";

}
  //listener koji prati skroll na stranici i po tome vrsi funkciju parralax
  window.addEventListener("scroll", function(){
    parallax(); 
  });

