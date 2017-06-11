console.log("this is main.js")


$(".info-section").append(`<p>Your available screen space is ${window.screen.availWidth} x ${window.screen.availHeight} px.</p>`);

$("#button").click(function() {
  var width = $('input[name=width]').val();
  var height = $('input[name=height]').val();

  chrome.runtime.sendMessage({
    "action": "create",
    "width": width,
    "height": height
  }, function() {
    console.log("send to the bg.js");
  })
})
