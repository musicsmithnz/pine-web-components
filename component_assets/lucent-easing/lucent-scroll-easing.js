<button id="scrollA">scroll to A</button>
<button id="scrollB">scroll to B</button>
<button id="scrollC">scroll to C</button>
<div id="A">section A</div>
<div id="B">section B</div>
<div id="C">section C</div>



function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function scrollEase(element, duration) {
    var startingY = window.pageYOffset
    var elementY = getElementY(element)
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    var diff = targetY - startingY
    var easing = function (t) { 
        return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 
    }
    var start
    if (!diff) return
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        var time = timestamp - start
        var percent = Math.min(time / duration, 1)
        percent = easing(percent)
        window.scrollTo(0, startingY + diff * percent)
        if (time < duration) {
            window.requestAnimationFrame(step)
        }
    })
}

var scroll_duration= 1500
document.getElementById('scrollA').addEventListener('click', scrollEase.bind(null, '#A', scroll_duration))
document.getElementById('scrollB').addEventListener('click', scrollEase.bind(null, '#B', scroll_duration))
document.getElementById('scrollC').addEventListener('click', scrollEase.bind(null, '#C', scroll_duration))
