function openSlideMenu(){
    document.getElementById('page').classList.toggle("sideopen");
    document.getElementById('ham-menu').style.display = 'none';
              
  var mq = window.matchMedia ( "(max-width: 480px)");
    if (mq.matches) {
      document.getElementById('side-nav').classList.toggle("side-menu-sml");
    }
    else {
      document.getElementById('side-nav').classList.toggle("side-menu-norm");
    }
  }
  
  function closeSlideMenu(){
    document.getElementById('ham-menu').style.display = 'block';
    document.getElementById('side-nav').classList.remove("side-menu-norm");
    document.getElementById('side-nav').classList.remove("side-menu-sml");
    document.getElementById('page').classList.remove("sideopen");
    closeDrop();
  }
  
  function openDropdownMenu_1() {
    closeDrop();
    document.getElementById("re-list1").classList.toggle("show");
  }
  function openDropdownMenu_2() {
    closeDrop();
    document.getElementById("re-list2").classList.toggle("show");
  }
  function openDropdownMenu_3() {
    closeDrop();
    document.getElementById("re-list3").classList.toggle("show");
  }
  function openDropdownMenu_4() {
    closeDrop();
    document.getElementById("re-list4").classList.toggle("show");
  }
  
  function closeDrop() {
    var cl = document.querySelectorAll(".dropdown-content");
      [].forEach.call(cl, function(closes) {
        closes.classList.remove("show");});
  }