function openSlideMenu(){
    document.getElementById('page').classList.toggle("sideopen");
    document.getElementById('ham-menu').style.display = 'none';
    document.getElementById('close-side-menu-div').style.display = 'block';
              
  var mq = window.matchMedia ( "(max-width: 480px)");
    if (mq.matches) {
      document.getElementById('side-nav').classList.toggle("side-menu-sml");
    }
    else {
      document.getElementById('side-nav').classList.toggle("side-menu-norm");
    }
  }

  function openDropMenu(listname)
  {
    var dropCont = document.getElementById(listname);  
    if(dropCont.classList.contains('show')) {
      dropCont.classList.remove('show');
    }
    else {
      closeDrop();
      dropCont.classList.toggle('show');
  }
}

  function closeDrop() {
    var cl = document.querySelectorAll(".dropdown-content");
      [].forEach.call(cl, function(closes) {
        closes.classList.remove("show");});
  }

  function closeSlideMenu(){
    document.getElementById('ham-menu').style.display = 'block';
    document.getElementById('close-side-menu-div').style.display = 'none';
    document.getElementById('side-nav').classList.remove("side-menu-norm");
    document.getElementById('side-nav').classList.remove("side-menu-sml");
    document.getElementById('page').classList.remove("sideopen");
    closeDrop();
  }
