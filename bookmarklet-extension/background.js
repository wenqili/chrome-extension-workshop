console.log('Bookmarklet Extension background.js')

chrome.browserAction.onClicked.addListener(function() {
  console.log('Clicked browser action')
  chrome.tabs.executeScript(null, {
    file: 'jquery.js'
  }, function() {
    chrome.tabs.executeScript(null, {
      file: 'my-script.js'
    })
  })
  chrome.tabs.insertCSS(null, {
    file: 'my-styles.css'
  })
})
