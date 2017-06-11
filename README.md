# chrome-extension-workshop

We will go through

-   How to make a bookmarklet
-   How to make a chrome extension
-   Chrome browser API

in this workshop.


### What is a bookmarklet
---
a small software application stored as a bookmark in a web browser, which typically allows a user to interact with the currently loaded web page in some way.

examples:

### Keys of making a bookmarklet
---
1.  We can “link” to JavaScript code  
     ```html
    // This is how we share bookmarklet through you website
    <a href="javascript: alert("Yo~")">my alert</a>
    ```
1.  Browser allow you drag a link to bookmarks bar  
1.  Bookmarklet executes the JavaScript linked to bookmarklet only in this page, just like typing in the console  

### Resource
---
-  [Bookmarkleter](http://chriszarate.github.io/bookmarkleter/)  


### What is a chrome extension
---
Small programs that add new features to your browser and personalize your browsing experience.
Some really good ones:


### Basic Steps of making a chrome extension
---
1.  [manifest.json](https://developer.chrome.com/extensions/manifest)  
    Capabilities, names of files, permissions  
1.  [content scripts](https://developer.chrome.com/extensions/content_scripts)
    -   AKA persistent bookmarklets
    -   Injected onto any/every page you want
    -   cannot use most of Chrome APIs
1.  [background scripts](https://developer.chrome.com/extensions/background_pages)
    -   Used to communicate with Chrome (via APIs)
    -   Shared between all tabs
    -   running all the time

### Let's make pop-up windows
