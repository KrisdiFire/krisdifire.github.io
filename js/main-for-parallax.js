"use strict";
//////////////////////////////////////////
//If JS is disabled fallback//
//////////////////////////////////////////////////
let showRow = document.querySelectorAll('.content-row01');
let showColumn = document.querySelectorAll('.content01');
let separatorJSOff = document.querySelectorAll('.separator01');
//funkcija kojom dodajem stil klasama dont-show i -side, da
//ukoliko je JS dissabled, sadrzaj str bude renderovan umesto opacity = 0;
function ifJSDisabled() {
    Array.prototype.forEach.call(showRow, function (element) {
        if (element.classList.contains("dont-show")) {
            element.style.opacity = "0";
        }
    });
    Array.prototype.forEach.call(showColumn, function (element) {
        if (element.classList.contains("dont-show-side")) {
            element.style.left = "-250%";
        }
        if (element.classList.contains("img-bck-inner")) {
            element.classList.add("dont-show");
        }
    });
    Array.prototype.forEach.call(separatorJSOff, function (element) {
        if (element.classList.contains("js-remove")) {
            element.style.display = "none";
        }
    });
}
ifJSDisabled();

//////////////////////////////////////////////////////
//Do something on page load, opposite of isJsDisabled function probably
//////////////////////////////////////////////////////////////////
let scroll01 = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 3000 / 60);
    };

function loopThroughElements() {

    Array.prototype.forEach.call(showRow, function (element) {
        if ((isInView(element)) && (element.classList.contains("dont-show"))) {
            element.classList.add('show-content');
        }
    });
    Array.prototype.forEach.call(showColumn, function (element) {
        if ((isInView(element)) && (element.classList.contains("dont-show-side"))) {
            element.classList.add('show-content-side');
        }
    });
    scroll01(loopThroughElements);
}
// Call the loop for the first time
loopThroughElements();

////////////////////////////////////////
//FUNCTION To show the button after scrolling 500px down from the top//
////////////////////////////////////////////////
let upButton = document.getElementById("up");

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        upButton.classList.add("up-opacity");
    } else {
        upButton.classList.remove("up-opacity");
    }
}
scrollFunction();

//assign an event listener to activate on click
upButton.addEventListener("click", upTop);

// function to scroll up
function upTop() {
    document.body.scrollTop = 0; // Za Safari
    document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE i Operu
}

/////////////////////////////////
//Code which changes an elements style according to its position over other elements
////////////////////////////////////////

//apply the appropriete class depending on the result of the below function inside the eventList
const overlapStatus = function (status, element) {
    if (status) {
        element.classList.remove('over-black');
    } else {
        element.classList.add('over-black');
    }
};
//check for overlapping
const overlapCheck = function (element) {
    return function (section) {
        return section.top + section.height >= element.top + element.height / 2 &&
            section.top + element.height / 2 <= element.top + element.height &&
            section.left + section.width >= element.left + element.width / 2 &&
            section.left + element.width / 2 <= element.left + element.width;
    };
};
//eventListener that will run the check and function
window.addEventListener("scroll", function () {
    scrollFunction(); //this is to check if the up but is "X"px from top of page - not related to the main func
    //get the elements with the black bg with which other changing elements will colide width
    let sectionRects = [...document.querySelectorAll('.black-bg')]
        .map(function (el) {
            return el.getBoundingClientRect();
        });
    //get changing elements
    let elementsRect = document.querySelectorAll('.change-on-over');
    //for each of the changing elements, get the rectangle
    Array.prototype.forEach.call(elementsRect, function (element) {
        let elementsToChange = element.getBoundingClientRect();

        //var that returns true/false when the elements are over the black bg elements
        let upInAnySection = sectionRects.some(overlapCheck(elementsToChange));

        //run the func to check for overlapping of each element
        overlapStatus(!upInAnySection, element);
    });
});

////////////////////////////////////////
//Racunica koliko je str odskrolovano od 0 - 100%//
////////////////////////////////////////////////

let bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight,
    viewportPerc = 0,
    totalBodyScrolledPerc = 0,
    bodyScrolled = 0;

let scrolly = document.getElementById("scrolly"),
    scrolledAm = document.getElementById("scrolled-am"),
    scrollHand = document.getElementById("scroll-hand");

function scrollBar() {
    bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;
    //koliko se odskrolovalo pocevsi od vrha - nikad ne dodje do 100% jer mu fali window inner height
    bodyScrolled = (Math.max(document.documentElement.scrollTop, document.body.scrollTop, document.body.offsetTop));
    //koliko je totalno stranice odskrolovano u procentima (Math.round-uj ovo da bude od 1 - 100 celi br)
    totalBodyScrolledPerc = (bodyScrolled / bodyHeight * 100);
    //scroll ammount za progressBar tj scrollbar - ako ovo postavim van ove funk, ne update-uje se kako treba, naci zasto//
    scrolledAm.style.transform = `translate3d(0,${totalBodyScrolledPerc}vh, 0)`;
}
scrollBar();
window.addEventListener('scroll', scrollBar);

////////////ZA HOLD DOWN SCROLL TP//////////////////
let attachment = false,
    lastPosition,
    position;

//scroll to a part of page
scrolly.addEventListener("mousedown", function (e) {
    if (e.type === "mousedown") {
        attachment = true;
        position = e.clientY / scrolly.offsetHeight * bodyHeight;
        window.scrollTo({
            top: position
        });
    }
});
//enable scrolling on mousepress + mousemove
scrolly.addEventListener("mousemove", function (e) {
    if (e.type === "mousemove" && attachment === true) {
        position = e.clientY / scrolly.offsetHeight * bodyHeight;
        window.scrollTo({
            top: position
        });
        document.documentElement.style.scrollBehavior = "initial";
    }
});
//when not pressing mouse button disable scrolling
window.addEventListener("mouseup", function (e) {
    if (e.type === "mouseup") {
        attachment = false;
        scrolly.classList.remove('hoveredScrolly');
        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.classList.remove("blockSelect");
    }
});
//enables scrolling through the page even when not moving over scrolly
window.addEventListener("mousemove", function (e) {
    if (e.type === "mousemove" && attachment === true) {
        position = e.clientY / scrolly.offsetHeight * bodyHeight;
        document.documentElement.style.scrollBehavior = "initial";
        document.documentElement.classList.add("blockSelect");
        window.scrollTo({
            top: position
        });
    }
});
//for scrolly to stay as hovered
window.addEventListener('mousedown', function (e) {
    if (e.type === 'mousedown' && attachment === true) {
        scrolly.classList.add('hoveredScrolly');
    }
});

////////////////////////////////////////
//FUNKCIJA ZA Screen Size Check//
////////////////////////////////////////////////

var bodi = document.getElementsByTagName('body')[0];
var htm = document.documentElement;

function largeOrSmallScreen() {

    let winWidth = window.innerWidth;

    if (winWidth >= 769) {
        bodi.classList.add("noScrollBar");
        htm.classList.add("noScrollBar");
        scrolly.style.display = "block";
        scrollBar();
        //window.addEventListener('scroll', scrollBar);
    }

    if (winWidth < 769) {
        bodi.classList.remove("noScrollBar");
        htm.classList.remove("noScrollBar");
        scrolly.style.display = "none";
        //window.removeEventListener('scroll', scrollBar);
    }
}
largeOrSmallScreen();
window.addEventListener('resize', largeOrSmallScreen);

/////////////////////////////////
//IS element in view funk//
//////////////////////////////////////
function isInView(el) {
    let box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
}

// Debounce function
// function debounce(func, time) {
//     var time = time;
//     var timer;
//     return function (event) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(func, time, event);
//     };
// }
//window.addEventListener("resize", debounce(checker, 350));

//Is the user scrolling check//
// let oldPosition = 0,
//     newPosition = 0,
//     isScrolling;

// function isScrollingNow () {

//     if (newPosition == oldPosition) {
//         isScrolling = false;
//     }
//     else {
//         isScrolling = true;
//     }

//     oldPosition = newPosition;
//     newPosition = window.pageYOffset;

//     // console.log(isScrolling);
//     requestAnimationFrame(isScrollingNow);
// }
// isScrollingNow();