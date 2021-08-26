console.log("Background script running!");

chrome.browserAction.onClicked.addListener(establishPort);
function establishPort(tab) {
    let port = chrome.tabs.connect(tab.id, {name: "establish_connection"});
    port.postMessage({action: "openModal"});
}