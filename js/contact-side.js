var contactNav = document.getElementById("soc-menu");

contactNav.classList.add("social-menu-side");
contactNav.classList.add("soc-opacity");

window.addEventListener('scroll', scrollSideM);

function scrollSideM() {

//kad je izmedju 

  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {

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

   if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 4000) {

    contactNav.classList.remove("social-menu-side");
    contactNav.classList.remove("soc-opacity-0");

    }
}