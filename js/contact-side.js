/*var contactNav = document.getElementById("soc-menu");

contactNav.classList.add("social-menu-side");
contactNav.classList.add("soc-opacity");

window.addEventListener('scroll', scrollSideM);

function scrollSideM() {

  let lowPerc = 55,
  highPerc = 80;

  let bodyHeight = document.body.scrollHeight,
  bodyScrolled = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
  convertToPercent = Math.round(bodyScrolled / bodyHeight * 100);

//kad je izmedju 

  if (convertToPercent > lowPerc) {

    contactNav.classList.add("soc-opacity-0");
    contactNav.classList.add("social-menu");
    
    }

//kad je gore desno

   else {

    contactNav.classList.add("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");
    contactNav.classList.remove("social-menu");

    }

//kad je dole

   if (convertToPercent > highPerc) {

    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");

    }
}

//console.log(scrollSideM);*/