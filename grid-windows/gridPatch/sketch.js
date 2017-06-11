console.log("this is grid sketch")

var h = 50;
var s = 100;
var l = 50;

//send msg to bg.js when loaded
chrome.runtime.sendMessage({
  "action": "loaded"
}, function(res) {
  console.log(res)
  if (res.h != null) {
    h = res.h
    s = res.s
    l = res.l
  }
})

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSL)
  var col = color(h, s, l)
  background(col)
}

function draw() {
  var col = color(h, s, l)
  background(col)
}
