console.log("background.js working!")
var k = document.getElementById('filterButton');
if(k){
    k.addEventListener('click', function injectTheScript2() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "filter.js"});
        console.log("Filter.js Injected successfully")
    });
    });
}
//list_1 = ["Hello","World"];
//https://gilfink.medium.com/using-messaging-in-chrome-extension-4ae65c0622f6
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        sendResponse(list_1);
    });

