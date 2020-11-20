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


  ///////////////////////////

  function isScreenRight() {

    var width = window.innerWidth;

      if (width >= 769) {
        window.addEventListener('scroll', singPrlx);
      }

      if (width < 769) {
        window.removeEventListener('scroll', singPrlx);
//reset elements positions // I need to find a better way, using classes perhaps?
        var prlxClassClose = document.getElementsByClassName('prlx-closer');

        for (var b = 0; b < prlxClassClose.length; b++) {
          prlxClassClose[b].style.transform = `translate3d(0, 0px, 0)`;
        }

      }

  }


isScreenRight();
window.addEventListener('resize', isScreenRight);