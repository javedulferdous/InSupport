
console.log("Background script");
chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
    // Now if the message matches "browser action"
    if (request.dataAttribute !== undefined) {
        console.log(request.dataAttribute);
    }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
   console.log(message.dataAttribute); 
});
    