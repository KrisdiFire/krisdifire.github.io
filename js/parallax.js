//nova funkcija za pomeranje citavih klasa
var closePrlx = document.getElementsByClassName("prlx-close");
var medPrlx = document.getElementsByClassName("prlx-mult-med");
var farPrlx = document.getElementsByClassName("prlx-mult-sm");
var farPrlxOW = document.getElementsByClassName("prlx-mult-sm-ow");
  
function scrollElement() {

  var closeY = window.pageYOffset/+36;
  var mediumY = window.pageYOffset/+76;
  var farY = window.pageYOffset/+90;
  var farYow = window.pageYOffset/-75;

  for (var i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translateY" + "(" + closeY + "rem" + ")";
  }

  for (var o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translateY" + "(" + mediumY + "rem" + ")";
  }

  for (var p = 0; p < farPrlx.length; p++) {
    farPrlx[p].style.transform = "translateY" + "(" + farY + "rem" + ")";
  }

  for (var u = 0; u < farPrlxOW.length; u++) {
    farPrlxOW[u].style.transform = "translateY" + "(" + farYow + "rem" + ")";
  }
}

window.addEventListener("scroll", scrollElement);