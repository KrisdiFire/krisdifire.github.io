/*!
  By Kristian Firedi, krisdifire.github.io
  Website: krisdifire.github.io/parallax
	Available for use under the MIT License
	Version 1.22
*/
'use-strict'

/////////////////////////////
// Calculate the body scrolled percentage
////////////////////////////////////////
let bodyHeight =
  Math.max(document.body.scrollHeight, document.body.offsetHeight) -
  window.innerHeight

// Initial values
let totalBodyScrolledPerc = 0
let bodyScrolled = 0

function bodyScrolledAmount() {
  bodyHeight =
    Math.max(
      document.documentElement.scrollHeight,
      document.body.offsetHeight
    ) - window.innerHeight

  // koliko se odskrolovalo pocevsi od vrha - nikad ne dodje do 100% jer mu fali window inner height
  bodyScrolled = Math.max(
    document.documentElement.scrollTop,
    document.body.offsetTop
  )

  // koliko je totalno stranice odskrolovano u procentima (Math.round-uj ovo da bude od 1 - 100 celi br)
  totalBodyScrolledPerc = (bodyScrolled / bodyHeight) * 100
}

////////////////////////////////////////
//Parallax Class
////////////////////////////////////////////////
class PrlxElements {
  constructor() {
    // Get all parallaxing elements
    this.elements = document.querySelectorAll('.prlx-element')
    // Prlx elem storage
    this.cache = []
    this.initialize()
  }

  setCache() {
    this.elements.forEach((element) => {
      const elemCache = {}
      // The element
      elemCache.el = element
      // parent rect
      elemCache.parent = element.parentElement
      // Transform speed
      elemCache.speed = element.dataset.prlxSpeed
      // Stop top pos
      elemCache.stopA = element.dataset.prlxStopS
      // Stop bot pos
      elemCache.stopB = element.dataset.prlxStopE
      // Stop top pos
      elemCache.stopApoint = element.dataset.prlxStopSp
      // Stop bot pos
      elemCache.stopBpoint = element.dataset.prlxStopEp
      // Starting position
      elemCache.sy = 0
      // Easing amount, maybe I'll implement so that the user can configure this value
      elemCache.ease = 0.08
      // Changed position initialized as starting position
      elemCache.dy = elemCache.sy
      // Var in order to run the runner on startup
      elemCache.wasIrun = false
      // Add this to the list of scrolling element objects
      this.cache.push(elemCache)
    })
  }

  runner() {
    this.cache.forEach((elem) => {
      if (elem.wasIrun == false) {
        transformer(elem.el, elem.sy)
        elem.wasIrun = true
      }
      if (isInView(elem.el.closest('.prlx-section')) || isInView(elem.el)) {
        elem.sy = getValue(
          elem.el,
          elem.stopA,
          elem.stopB,
          elem.parent,
          elem.speed
        )
      }
    })
  }

  transform() {
    const activeWidth = window.innerWidth > 769

    this.cache.forEach((elem) => {
      if (!elem.el) return

      if (activeWidth) {
        elem.dy = lerp(elem.dy, elem.sy, elem.ease)

        const hasLerp =
          !elem.el.classList.contains('prlx-norm') &&
          (elem.el.classList.contains('with-lerp') ||
            elem.el.classList.contains('prlx-lerp'))

        if (hasLerp) {
          transOptions(elem.el, elem.stopApoint, elem.stopBpoint, elem.dy)
        } else {
          transOptions(elem.el, elem.stopApoint, elem.stopBpoint, elem.sy)
        }
      } else {
        elem.el.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`
      }
    })

    // Animate the changes
    window.requestAnimationFrame(this.transform.bind(this))
  }

  initialize() {
    this.setCache()
    this.runner()
    this.transform()
    window.addEventListener('scroll', this.runner.bind(this))
  }
}

// Get parents and their offsets that'll be used in getting the transform value
function getOffsetTop(element) {
  let offsetTop = 0
  while (
    element.parentNode &&
    element.parentNode.nodeName.toLowerCase() != 'body'
  ) {
    element = element.parentNode
    offsetTop += element.offsetTop
  }
  return offsetTop
}

// Calculate the position in order for the element to be in its starting position when in center of the screen
function getValue(item, stopA, stopB, parent, speed) {
  const totalOffsetTop = getOffsetTop(item)
  const parentHeight = parent.clientHeight
  const parentWidth = parent.clientWidth

  const scrollOffset =
    window.pageYOffset -
    totalOffsetTop +
    window.innerHeight / 2 -
    parentHeight / 2

  const scrollPercent = (scrollOffset / parentHeight) * 100 * (speed / 10)

  // to be calculated
  let transformPercent

  if (item.classList.contains('prlx-sideways')) {
    const parentPercentWidth = (parentWidth / bodyHeight) * 100
    const childPercentWidth =
      (((item.offsetWidth / bodyHeight) * 100) / parentPercentWidth) * 100
    const itemOffsetLeft =
      ((parentWidth - (item.offsetLeft + item.offsetWidth)) / bodyHeight) * 100
    const itemOffsetLeftPercent = (itemOffsetLeft / parentPercentWidth) * 100
    //
    stopA = stopA - itemOffsetLeftPercent
    stopB = stopB - childPercentWidth - itemOffsetLeftPercent
    //
    transformPercent = parentWidth / 100
  } else {
    const parentPercentHeight = (parentHeight / bodyHeight) * 100
    const childPercentHeight =
      (((item.offsetHeight / bodyHeight) * 100) / parentPercentHeight) * 100
    const itemOffsetTop = (item.offsetTop / bodyHeight) * 100
    const itemOffsetTopPercent = (itemOffsetTop / parentPercentHeight) * 100
    //
    stopA = stopA - itemOffsetTopPercent
    stopB = stopB - childPercentHeight - itemOffsetTopPercent
    //
    transformPercent = parentHeight / 100
  }

  if (scrollPercent <= stopA) {
    return stopA * transformPercent
  } else if (scrollPercent >= stopB) {
    return stopB * transformPercent
  } else {
    return scrollPercent * transformPercent
  }
}

// linear interpolation func
function lerp(a, b, n) {
  a = (1 - n) * a + n * b
  return Math.floor(a * 100) / 100
}

// check for stop pos and/or lerp
function transOptions(elem, stopA, stopB, value) {
  if (isInView(elem.closest('.prlx-section')) || isInView(elem)) {
    if (value > stopB) {
      transformer(elem, stopB)
    } else if (value < stopA * -1) {
      transformer(elem, stopA * -1)
    } else {
      transformer(elem, value)
    }
  }
}

// execute the actual transformation
function transformer(elem, value) {
  if (elem.classList.contains('prlx-sideways')) {
    elem.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value}, 0, 0, 1)`
  } else {
    elem.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${value}, 0, 1)`
  }
}

// is the element in the viewport
function isInView(el) {
  let rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom >= 0
}

// Initialize
bodyScrolledAmount()
window.addEventListener('scroll', bodyScrolledAmount)
const prlx = new PrlxElements()
