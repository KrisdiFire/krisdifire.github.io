
/*Funk za otv side menija */
function openSlideMenu(){
    document.getElementById('whole-page').classList.toggle("sideopen");
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
/*Funk za otv dropa */
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
/*Funk za zatv dropa */
  function closeDrop() {
    var cl = document.querySelectorAll(".dropdown-content");
      [].forEach.call(cl, function(closes) {
        closes.classList.remove("show");});
  }
/*Funk za zatv side menija */
  function closeSlideMenu(){
    document.getElementById('ham-menu').style.display = 'block';
    document.getElementById('close-side-menu-div').style.display = 'none';
    document.getElementById('side-nav').classList.remove("side-menu-norm");
    document.getElementById('side-nav').classList.remove("side-menu-sml");
    document.getElementById('whole-page').classList.remove("sideopen");
    closeDrop();
  }
  
/*Funk i varijabla za sporije prikazivanje background videa */

  var vid = document.getElementById("background-video");
  
  function setPlaySpeed() { 
    vid.playbackRate = 0.7;
  } 

  setPlaySpeed();
