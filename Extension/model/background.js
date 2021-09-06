console.log("Background script running!");
console.log(document.location);
chrome.browserAction.onClicked.addListener(establishPort);
function establishPort(tab) {
    let port = chrome.tabs.connect(tab.id, {name: "establish_connection"});
    port.postMessage({action: "openModal"});
}