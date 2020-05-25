function openSlideMenu(){
            document.getElementById('side-nav').style.width = '20em'
            document.getElementById('whole-page').style.marginRight = '20em'
        }
        function closeSlideMenu(){
            document.getElementById('side-nav').style.width = '0'
            document.getElementById('whole-page').style.marginRight = '0'
        }
        function closeSlideMenu(){
            document.getElementById('side-nav').style.width = '0'
            document.getElementById('whole-page').style.marginRight = '0'
        }

        /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
      document.getElementById("re-list1").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function() {
      if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("re-list1");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
    }

    function myFunction2() {
      document.getElementById("re-list2").classList.toggle("show");
    }
    
    window.onclick = function() {
      if (!e.target.matches('.dropbtn2')) {
      var myDropdown = document.getElementById("re-list2");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
    }

    function myFunction3() {
      document.getElementById("re-list3").classList.toggle("show");
    }
    
    window.onclick = function() {
      if (!e.target.matches('.dropbtn3')) {
      var myDropdown = document.getElementById("re-list3");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
    }

    function myFunction4() {
      document.getElementById("re-list4").classList.toggle("show");
    }
    
    window.onclick = function() {
      if (!e.target.matches('.dropbtn4')) {
      var myDropdown = document.getElementById("re-list4");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
    }
