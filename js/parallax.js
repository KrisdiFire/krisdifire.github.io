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

/////////////////////////////////////////////////

    function singPrlx() {

      var prlxId = document.getElementById('prlx-gal');


   //   elem = cont.find('.parallax-image'),
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

para.css('top', value + 'px');

  */
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
      
          prlxId.style.top = value/3 + "px";

console.log(value);

    }

    window.addEventListener("scroll", singPrlx);

  
    
    /*
    (function($) {
    
      var win = $(window),
        win_h = win.height();
        parallaxers = $('.parallax-window'),
        parallax_objs = [],
        scroll_busy = false;
    
      function init_parallax() {
        win_h = win.height();
        parallax_objs = [];
        parallaxers.each(function() {
          var cont = $(this),
            elem = cont.find('.parallax-image'),
            cont_top = cont.offset().top,
            cont_h = cont.height(),
            elem_h = Math.round(cont_h * 1.3),
            diff = elem_h - cont_h,
            max = Math.max(cont_h, win_h),
            speed = diff / max,
            parallaxer = {
              cont_top: cont_top,
              cont_h: cont_h,
              elem: elem,
              speed: speed
            };
          parallax_objs.push(parallaxer);
        });
      }
      
      function on_scroll() {
        if (!scroll_busy) {
          scroll_busy = true;
          window.requestAnimationFrame(init_scroll);
        }
      }
    
      function init_scroll() {
        scroll_events()
        scroll_busy = false;
      }
    
      function scroll_events() {
        var win_top = win.scrollTop(),
          win_btm = win_top + win_h;
    
        $.each(parallax_objs, function(i, para) {
          cont_btm = para.cont_top + para.cont_h;
          if( cont_btm > win_top && para.cont_top <= win_btm ) {
            var cont_scrolled = win_top - para.cont_top - para.cont_h,
              value = Math.round(cont_scrolled * para.speed);
            para.elem.css('top', value + 'px');
          }
        });
      }
    
      $(document).ready(function() {
        init_parallax();
        win.resize(init_parallax);
        scroll_events();
        win.scroll(on_scroll);
      });
    
    })(jQuery);
    */