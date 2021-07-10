console.log("background.js working!")
var filter = document.getElementById('filterButton');
if(filter){
    filter.addEventListener('click', function injectTheScript2() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "filter.js"});
        console.log("Filter.js Injected successfully")
    });
    });
}
var page = document.getElementById('pageButton');
if(page){
    page.addEventListener('click', function injectTheScript4() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "page.js"});
        console.log("page.js Injected successfully")
    });
    });
}
var search = document.getElementById('searchButton');
if(search){
    search.addEventListener('click', function injectTheScript1() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "search.js"});
        console.log("search.js Injected successfully")
    });
    });
}
var sort = document.getElementById('sortButton');
if(sort){
    sort.addEventListener('click', function injectTheScript1() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "sort.js"});
        console.log("sort.js Injected successfully")
    });
    });
}
//list_1 = ["Hello","World"];
//https://gilfink.medium.com/using-messaging-in-chrome-extension-4ae65c0622f6
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        sendResponse(list_1);
    });

