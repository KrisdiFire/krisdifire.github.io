//nova funkcija za pomeranje citavih klasa
var closePrlx = document.getElementsByClassName("prlx-close");
var medPrlx = document.getElementsByClassName("prlx-mult-med");
var farPrlx = document.getElementsByClassName("prlx-mult-sm");
var farPrlxOW = document.getElementsByClassName("prlx-mult-sm-ow");
var verTxt = document.getElementsByClassName("o5t")[0];
var verTxt2 = document.getElementsByClassName("o6t")[0];
  
function scrollElement() {

  var closeY = window.pageYOffset/+36;
  var mediumY = window.pageYOffset/+76;
  var farY = window.pageYOffset/+90;
  var farYow = window.pageYOffset/-75;
  var farYow2 = window.pageYOffset/-95;

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

  verTxt.style.transform = "translateY" + "(" + farYow + "rem" + ")";
  verTxt2.style.transform = "translateY" + "(" + farYow2 + "rem" + ")";

}

window.addEventListener("scroll", scrollElement);

/*
var bodyRect = document.body.getBoundingClientRect(),
    elemRect = closePrlx[i].getBoundingClientRect(),
    elemParRect = closePrlx[i].parentNode.getBoundingClientRect(),
    max = Math.max(elemParRect, bodyRect),
    cont_scrolled = bodyRect.top - elemParRect.top - elemRect.height,
    offset = elemRect.top - bodyRect.top,
    speed = offset / max,
    value = Math.round(cont_scrolled * speed);

    console.log(value);

    closePrlx[i].style.transform = "translateY" + "(" + value + "rem" + ")";*/