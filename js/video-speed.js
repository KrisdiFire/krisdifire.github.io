/*Funk i varijabla za sporije prikazivanje background videa */
//element koji assignujemo varijablom vid
var vid = document.getElementById("background-video");
//pisemo funkciju
function setPlaySpeed() { 
  vid.playbackRate = 0.6;
} 
//pozivamo funkciju cim se ucita JS
setPlaySpeed();