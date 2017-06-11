console.log("this is background.js");

var unit = 100
var hsl = []
var a = 0

chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {
    try {
      var tabid = sender.tab.id;
    } catch (e) {}

    if (req.action === "create") {
      createGrid(req.width, req.height);
    } else if (req.action === "loaded") {
      sendResponse(hsl[tabid])
    }
  }) //end of chrome.runtime.onMessage.addListener


function createGrid(width, height) {
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var winConfig = {
        url: chrome.extension.getURL("/gridPatch/index.html"),
        left: i * unit,
        top: 22 + j * unit,
        width: unit,
        height: unit,
        type: "popup"
      }

      chrome.windows.create(winConfig, function(win) {
        var tabid = win.tabs[0].id;
        hsl[tabid] = {
          "h": a * 2,
          "s": 100,
          "l": 50
        }
        a += 1
        console.log(hsl[tabid].h)
      }) //end of create callback
    } //end of j loop
  } //end of i loop
}
