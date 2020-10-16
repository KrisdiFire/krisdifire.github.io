function sekunde() {
//take the date and time
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
//assign the dials
    let seconds = document.getElementById('s');
    let minutes = document.getElementById('m');
    let hours = document.getElementById('h');
//return the dials back to start after 12 hours (we don't have 24 hour) 
        if (hour > 12) {hour = hour - 12;}
//calculate the number of degrees the dials should be rotated in order 
//to adjust them properly using the below variables
    let csec = sec * 6;
    let cmin = min * 6;
    let chour = hour * 30 + min/2;
//adjust the dials by styling them with the variables above and 
//adding "deg" to the ends of the numbers
        seconds.style.transform="rotate("+ csec +"deg)";
            minutes.style.transform="rotate("+ cmin +"deg)";
                hours.style.transform="rotate("+ chour +"deg)"; 
                
  //  if (hour < 12 ) {}


//do this every second
   setTimeout(sekunde,1000);
}
//run script
    sekunde();
    
    