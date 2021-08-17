
console.log("Background script");
chrome.tabs.query({
    active: true,
    currentWindow: true
}, (tabs) => {
    let port = chrome.tabs.connect(tabs[0].id);

    port.onMessage.addListener((response) => {
        console.log(response.dataAttribute);
    });
});