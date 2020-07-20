/*funkcija za parallax u headeru na front page*/
function parallax() {
    var s = document.getElementById("willkommen");
  var yPos = 0 - window.pageYOffset/22;  
  s.style.top = 10 + yPos + "rem";}
  
  window.addEventListener("scroll", function(){
    parallax(); 
  });