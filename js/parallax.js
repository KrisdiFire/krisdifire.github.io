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

  for (var i = 0; i < closePrlx.length; i++) {
    closePrlx[i].style.transform = "translate3d" + "(" + "0," + closeY  + "rem" + ", 0" + ")";
  }

  for (var o = 0; o < medPrlx.length; o++) {
    medPrlx[o].style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
  }

  for (var p = 0; p < farPrlx.length; p++) {
    farPrlx[p].style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
  }

  verTxt.style.transform = "translate3d" + "(" + "0," + mediumY  + "rem" + ", 0" + ")";
  verTxt2.style.transform = "translate3d" + "(" + "0," + farY  + "rem" + ", 0" + ")";
  

}

window.addEventListener("scroll", scrollElement);

/////////////////////////////////////////////////

function singPrlx() {

  var prlxClassClose = document.getElementsByClassName('prlx-closer');
    
    for (var b = 0; b < prlxClassClose.length; b++) {

      var body_h = document.body.scrollHeight,
          win_off = window.pageYOffset,
          elem_h = prlxClassClose[b].offsetTop,
          elemPar_h = prlxClassClose[b].parentNode.clientHeight,
          elemPar_off = prlxClassClose[b].parentNode.offsetTop,

          diff = elem_h - elemPar_h,
          max = Math.max(elem_h, body_h),
          speed = diff / max,
          cont_scrolled = win_off - elemPar_off - elemPar_h,
          value = Math.round(cont_scrolled * speed);

          prlxClassClose[b].style.transform = `translate3d(0,${value * 2}px, 0)`;

    }

  }  

  function singPrlxOw() {

    var prlxClassClose = document.getElementsByClassName('prlx-closer-ow');
      
      for (var b = 0; b < prlxClassClose.length; b++) {
  
        var body_h = document.body.scrollHeight,
            win_off = window.pageYOffset,
            elem_h = prlxClassClose[b].offsetTop,
            elemPar_h = prlxClassClose[b].parentNode.clientHeight,
            elemPar_off = prlxClassClose[b].parentNode.offsetTop,
  
            diff = elem_h - elemPar_h,
            max = Math.max(elem_h, body_h),
            speed = diff / max,
            cont_scrolled = win_off - elemPar_off - elemPar_h,
            value = Math.round(cont_scrolled * speed);
  
            prlxClassClose[b].style.transform = `translate3d(0,${value * -1.5}px, 0)`;
  
      }
  
    }  

  function isScreenRight() {

    var width = window.innerWidth;

      if (width >= 769) {
        window.addEventListener('scroll', singPrlx);
        window.addEventListener('scroll', singPrlxOw);
      }

      if (width < 769) {
        window.removeEventListener('scroll', singPrlx);
        window.removeEventListener('scroll', singPrlxOw);
//reset elements positions // I need to find a better way, using classes perhaps?
        var prlxClassClose = document.getElementsByClassName('prlx-closer');
        var prlxClassCloseOw = document.getElementsByClassName('prlx-closer-ow');

        for (var b = 0; b < prlxClassClose.length; b++) {
          prlxClassClose[b].style.transform = `translate3d(0, 0px, 0)`;
        }

        for (var w = 0; w < prlxClassCloseOw.length; w++) {
          prlxClassCloseOw[w].style.transform = `translate3d(0, 0px, 0)`;
        }

      }

  }


isScreenRight();
window.addEventListener('resize', isScreenRight);

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var mainMenu = document.getElementsByClassName('main-menu')[0];

  if (prevScrollPos > currentScrollPos) {
    mainMenu.style.top = "0";
  } else {
    mainMenu.style.top = "-3rem";
  }
  prevScrollPos = currentScrollPos;
}