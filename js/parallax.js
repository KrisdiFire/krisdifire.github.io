//nova funkcija za pomeranje citavih klasa
let closePrlx = document.getElementsByClassName("prlx-close");
let medPrlx = document.getElementsByClassName("prlx-mult-med");
let farPrlx = document.getElementsByClassName("prlx-mult-sm");
let verTxt = document.getElementsByClassName("o5t")[0];
let verTxt2 = document.getElementsByClassName("o6t")[0];
  
function scrollElement() {

  let closeY = window.pageYOffset/+36;
  let mediumY = window.pageYOffset/+66;
  let farY = window.pageYOffset/+85;
  let farYow = window.pageYOffset/-55;
  let farYow2 = window.pageYOffset/-75;

  for (var i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translateY" + "(" + closeY + "rem" + ")";
  }

  for (var o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translateY" + "(" + mediumY + "rem" + ")";
  }

  for (var p = 0; p < farPrlx.length; p++) {
    farPrlx[p].style.transform = "translateY" + "(" + farY + "rem" + ")";
  }

  verTxt.style.transform = "translateY" + "(" + mediumY + "rem" + ")";
  verTxt2.style.transform = "translateY" + "(" + farY + "rem" + ")";

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