/////////////////////////////////////////////////

function singPrlx() {

  let prlxClassClose = document.getElementsByClassName('prlx-closer');
    
    for (let b = 0; b < prlxClassClose.length; b++) {


      let win_off = window.pageYOffset,
          win_h = window.innerHeight,
          elem_h = prlxClassClose[b].offsetHeight,
          elem_off = prlxClassClose[b].offsetTop,
          elemPar_h = prlxClassClose[b].parentNode.clientHeight,
          elemPar_off = prlxClassClose[b].parentNode.offsetTop,
        //elemPar_off_bot = (elemPar_off + elemPar_h) - elemPar_off,
          elemParPar_h = prlxClassClose[b].parentNode.parentNode.offsetHeight,
          elemParPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

          diff = elem_off - elemPar_h,
          max = Math.max(elem_h, win_h),
          speed = diff / max,

          cont_scrolled = win_off - elemParPar_off - elemPar_off,

          cont_scrolled0 = cont_scrolled + win_h/2 - elemPar_h/2, // umesto elemPar_h uzeti elemParPar ako nema vise redova
          value = Math.round(cont_scrolled0 * speed);

          prlxClassClose[b].style.transform = `translate3d(0,${value * 1}px, 0)`;

    }

  }  


  ///////////////////////////

  function isScreenCorrect() {

    let width = window.innerWidth;

      if (width >= 769) {
        window.addEventListener('scroll', singPrlx);
      }

      if (width < 769) {
        window.removeEventListener('scroll', singPrlx);
//reset elements positions // I need to find a better way, using classes perhaps?
        let prlxClassClose = document.getElementsByClassName('prlx-closer');

        for (let b = 0; b < prlxClassClose.length; b++) {
          prlxClassClose[b].style.transform = `translate3d(0, 0px, 0)`;
        }

      }

  }


isScreenCorrect();
window.addEventListener('resize', isScreenCorrect);


/*   RADI, ALI SU STV MALO OFF CENTER
function singPrlx() {

  var prlxClassClose = document.getElementsByClassName('prlx-closer');
    
    for (var b = 0; b < prlxClassClose.length; b++) {
//uzimamo height celog bodija
      var body_h = document.body.scrollHeight,
      //koliko je skrolovano
          win_off = window.pageYOffset,
      //visina prozora
          win_h = window.offsetHeight,
      //koliki je elementov offset od vrha elementa
          elem_h = prlxClassClose[b].offsetHeight,
      //elemntov offset od vrha parenta
          elem_off = prlxClassClose[b].offsetTop,
      //koliko je visok elementov parent element
          elemPar_h = prlxClassClose[b].parentNode.offsetHeight,
      //koliko je parent odskrolan od vrha
          elemPar_off = prlxClassClose[b].parentNode.parentNode.offsetTop,

      //kolika je razlika izmedju
          diff = elem_h - elemPar_h,
      //uzimamo veci broj = ovde koliko je visok body
          max = Math.max(elemPar_h, body_h),
      //brzina je razlika izmedju elementovog offseta i veceg broja
          speed = diff / max,
      //koliko je odskrolovano
          cont_scrolled = win_off - elemPar_off + elemPar_h - elem_h,
      //koliko ce se skrollati element
          value = Math.round(cont_scrolled * speed);

        //  prlxClassClose[b].style.top = "50%";

          prlxClassClose[b].style.transform = `translate3d(0,${value * 2}px, 0)`;

    }

  }  */