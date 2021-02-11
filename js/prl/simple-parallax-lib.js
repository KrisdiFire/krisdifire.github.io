/*!
    By Kristian Firedi, krisdifire.github.io
    Website: krisdifire.github.io/parallax
	Available for use under the MIT License
	Version 1.2
*/
'use-strict';
////////////////////////////////////////
//Parallax Class
////////////////////////////////////////////////
class PrlxElements {
    constructor() {
        this.elements = document.querySelectorAll(
        '.prlx-element');
        this.cache = [];
        this.initialize();
    }
    setCache() {
        this.elements.forEach((element) => {
            const elemCache = {};
            // The element
            elemCache.el = element;
            // Transform speed
            elemCache.speed = element.dataset.prlxSpeed;
            // Stop top pos
            elemCache.stop_t = element.dataset.prlxStopT;
            // Stop bot pos
            elemCache.stop_b = element.dataset.prlxStopB;
            // Stop left pos
            elemCache.stop_l = element.dataset.prlxStopL;
            // Stop right pos
            elemCache.stop_r = element.dataset.prlxStopR;
            // // Parent width/height
            // elemCache.par_wh = element.parentNode.getBoundingClientRect();
            // Starting position
            elemCache.sy = getValue(element);
            // Easing amount, maybe I'll implement so that the user can configure this value
            elemCache.ease = 0.08;
            // Changed position initialized as starting position
            elemCache.dy = elemCache.sy;
            // Add this to the list of scrolling element objects
            this.cache.push(elemCache);
        });
    }
    runner() {
        this.cache.forEach((elem) => {
            elem.sy = getValue(elem.el) * elem.speed;
        });
    }
    transform() {
        // Iterate through each object and transform
        this.cache.forEach((elem) => {
            if (window.innerWidth > 769) {
                elem.dy = lerp(elem.dy, elem.sy, elem
                    .ease);
                if (elem.el.classList.contains(
                        'prlx-sideways')) {
                    if (elem.el.classList.contains(
                            'with-lerp')) {
                        transOptions(elem.el, elem.stop_r,
                            elem.stop_l, elem.dy);
                    } else {
                        transOptions(elem.el, elem.stop_r,
                            elem.stop_l, elem.sy);
                    }
                } else if (elem.el.classList.contains(
                        'prlx-norm')) {
                    transOptions(elem.el, elem.stop_b,
                        elem.stop_t, elem.sy);
                } else if (elem.el.classList.contains(
                        'prlx-lerp')) {
                    transOptions(elem.el, elem.stop_b,
                        elem.stop_t, elem.dy);
                }
            } else {
                elem.el.style.transform =
                    `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
            }
        });
        // Animate the changes
        window.requestAnimationFrame(this.transform.bind(this));
    }
    initialize() {
        this.setCache();
        this.runner();
        this.transform();
        window.addEventListener('scroll', this.runner.bind(this));
    }
}
const prlx = new PrlxElements();
// get parents and their offsets that'll be used in getting the transform value
function getParentsOff(elem) {
    let parents = [];
    while (elem.parentNode && elem.parentNode.nodeName
        .toLowerCase() != 'body') {
        elem = elem.parentNode;
        parents.push(elem);
    }
    let totalParOff = [];
    for (let i = 0, n = parents.length; i < n; ++i) {
        totalParOff.push(parents[i].offsetTop);
    }
    let totalParOffSum = totalParOff.reduce(function (accumulator,
        currentValue) {
        return accumulator + currentValue;
    });
    return totalParOffSum;
}
//calculate the position in order for the element to be in its starting position when in center of the screen
function getValue(item) {
    let parentsOff = getParentsOff(item),
        win_h = window.innerHeight,
        win_off = window.pageYOffset,
        elemPar_h = item.parentNode.clientHeight,
        cont_scrolled = win_off - parentsOff + win_h / 2 -
        elemPar_h / 2;
    return cont_scrolled * bodyHeight/100 / win_h;
}
//linear interpolation func
function lerp(a, b, n) {
    a = (1 - n) * a + n * b;
    return Math.floor(a * 100) / 100;
}
//check for stop pos and/or lerp 
function transOptions(elem, stop_1, stop_2, value) {
    if (isInView(elem.closest(".prlx-section")) || isInView(elem)) {
        if (elem.classList.contains("stop-at-parent")) {
            let elemParRect = elem.parentNode.getBoundingClientRect();
            let elemRect = elem.getBoundingClientRect();    
            if (elem.classList.contains('prlx-sideways') == false) {
                stop_1 = (elemParRect.height / 2 - (elemRect.height / 2));
                stop_2 = (elemParRect.height / 2 - (elemRect.height / 2));
            } else {
                stop_1 = (elemParRect.width / 2 - (elemRect.width / 2));
                stop_2 = (elemParRect.width / 2 - (elemRect.width / 2));
            }
        }
        if (value > stop_1) {
            doer(elem, stop_1);
        } else if (value < stop_2 * -1) {
            doer(elem, stop_2 * -1);
        } else {
            doer(elem, value);
        }
    }
}
// doing the actual transformation
function doer(elem, value) {
    if (elem.classList.contains('prlx-sideways')) {
        elem.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value}, 0, 0, 1)`;
    } else {
        elem.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${value}, 0, 1)`;
    }
}
//is the element in the viewport (not taking into account the x axis)
function isInView(el) {
    let rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}


///////////////////////////////////////////////////////////////////////


class PrlxPercent {
    constructor() {
        this.elements = document.querySelectorAll(
        '.prlx-percent');
        this.cache = [];
        this.initialize();
    }
    setCache() {
        this.elements.forEach((element) => {
            const elemCache = {};
            // The element
            elemCache.el = element;
            // Parent width/height
            elemCache.parent = element.parentNode;
            // Transform speed
            elemCache.speed = element.dataset.prlxSpeed;
            // Stop top pos
            elemCache.stop_t = element.dataset.prlxStopT;
            // Stop bot pos
            elemCache.stop_b = element.dataset.prlxStopB;
            // Stop left pos
            elemCache.stop_l = element.dataset.prlxStopL;
            // Stop right pos
            elemCache.stop_r = element.dataset.prlxStopR;
            // Starting position
            elemCache.sy = getValue(element);
            // Easing amount, maybe I'll implement so that the user can configure this value
            elemCache.ease = 0.08;
            // Changed position initialized as starting position
            elemCache.dy = elemCache.sy;
            // Add this to the list of scrolling element objects
            this.cache.push(elemCache);
        });
    }
    runner() {
        this.cache.forEach((elem) => {
            elem.sy = getValue_perc(elem.el, elem.parent);
        });
    }
    transform() {
        // Iterate through each object and transform
        this.cache.forEach((elem) => {
         
            doer2(elem.el, elem.sy);
        
        });
        // Animate the changes
        window.requestAnimationFrame(this.transform.bind(this));
    }
    initialize() {
        this.setCache();
        this.runner();
        this.transform();
        window.addEventListener('scroll', this.runner.bind(this));
    }
}
const prlx_perc = new PrlxPercent();

function getValue_perc(elem, par) {

    par_rect = par.getBoundingClientRect();
    scrollOffset = (window.innerHeight) - par_rect.top - par_rect.height;
    scrollPercent = scrollOffset / (par_rect.height) * 100 * elem.dataset.prlxSpeed;

    // console.log(scrollPercent);

    if (scrollPercent < 0) {
        return scrollPercent = 0;
      }
    else if (scrollPercent > 100) {
        return scrollPercent = 100;
    }
    else {
        return scrollPercent;
    }
}

function doer2(elem, value) {
    transformPercent = elem.parentNode.offsetHeight / 100;
    if (elem.classList.contains('prlx-sideways')) {
        elem.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 
                ${value * transformPercent - elem.offsetHeight/2}, 0, 0, 1)`;
    } else {
        elem.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 
                ${value * transformPercent - elem.offsetHeight/2}, 0, 1)`;
    }
}

// par_rect = par.getBoundingClientRect();
// scrollOffset = (window.innerHeight/2) - par_rect.top/2;
// scrollPercent = scrollOffset / (par_rect.height) * 100;