function openSlideMenu(){
            document.getElementById('whole-page').style.marginRight = '20em'
            document.getElementById('ham-menu').style.display = 'none'
            
            var mq = window.matchMedia ( "(max-width: 480px)")
            if (mq.matches) {
              document.getElementById('side-nav').style.width = '100%'
              document.getElementById('side-nav').style.backgroundColor = 'black'
            }
            else {
              document.getElementById('side-nav').style.width = '20em'
              document.getElementById('side-nav').style.backgroundColor = '#4b4b4b80'
            }
        }
function closeSlideMenu(){
            document.getElementById('side-nav').style.width = '0em'
            document.getElementById('whole-page').style.marginRight = '0em'
            document.getElementById('ham-menu').style.display = 'block'
        }

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("re-list1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("re-list2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("re-list3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction4() {
  document.getElementById("re-list4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
