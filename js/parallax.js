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

      var prlxId = document.getElementById('prlx-gal');

   //   cont_top = cont.offset().top,
   //   cont_h = cont.height(),
   //   elem_h = Math.round(cont_h * 1.3),

   //   diff = elem_h - cont_h,
   //   max = Math.max(cont_h, win_h),
   //   speed = diff / max;
   /*

var diff = elem_h - cont_h,
max = Math.max(cont_h, win_h),
speed = diff / max,
cont_scrolled = win_top - cont_top - cont_h,
value = Math.round(cont_scrolled * speed);

  */
      var body_h = document.body.scrollHeight,
          win_off = window.pageYOffset,
          elem_h = prlxId.offsetTop,
          elemPar_h = prlxId.parentNode.clientHeight,
          elemPar_off = prlxId.parentNode.offsetTop,

          diff = elem_h - elemPar_h,
          max = Math.max(elem_h, body_h),
          speed = diff / max,
          cont_scrolled = win_off - elemPar_off - elemPar_h,
          value = Math.round(cont_scrolled * speed);

          prlxId.style.transform = `translate3d(0,${value * 0.25}rem, 0)`;

console.log(value);

    }

    window.addEventListener("scroll", singPrlx);


    /*
     var win_h = window.innerHeight,
          win_off = window.pageYOffset,
          elem_h = prlxId.offsetTop,
          elemPar_h = prlxId.parentNode.clientHeight,
          elemPar_off = prlxId.parentNode.offsetTop,

          diff = elem_h - elemPar_h,
          max = Math.max(elemPar_h, win_h),
          speed = diff / max,
          cont_scrolled = win_off - elemPar_off - elemPar_h,
          value = Math.round(cont_scrolled * speed);

          prlxId.style.transform = "translate3d" + "(" + "0," + value + "px" + ", 0" + ")";
    */