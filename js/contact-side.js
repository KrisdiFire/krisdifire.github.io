var contactNav = document.getElementById("soc-menu");

contactNav.classList.add("social-menu-side");
contactNav.classList.add("soc-opacity");

window.addEventListener('scroll', scrollSideM);

function scrollSideM() {

  let fiftyFivePerc = 55;
  let eightyPerc = 80;
  let bodyHeight = document.body.scrollHeight;
  let bodyScrolled = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  let convertToPercent = Math.round(bodyScrolled / bodyHeight * 100);

//kad je izmedju 

  if (convertToPercent > fiftyFivePerc) {

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

   if (convertToPercent > eightyPerc) {

    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");

    }
}

//console.log(scrollSideM);