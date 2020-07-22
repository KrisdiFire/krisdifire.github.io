/*funkcija za parallax ndf*/
function parallax() {

    var s = document.getElementById("willkommen");
    var o = document.getElementById("willkommen2");
    //var b = document.getElementById("willkommen3");

  var yPos = 0 - window.pageYOffset/46;  
  s.style.top = 10 + yPos + "rem";

  var yPos2 = 0 - window.pageYOffset/22;  
  o.style.top = 42 + yPos2 + "rem";

  //var yPos3 = 0 - window.pageYOffset/22;  
  //b.style.top = 0 + yPos3 + "rem";

}
  
  window.addEventListener("scroll", function(){
    parallax(); 
  });

