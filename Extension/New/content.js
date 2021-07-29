(function () {
  var x, i, fList = [];
  x = document.querySelectorAll('[data-attribute="filter"]');
  for (i = 0; i < x.length; i++) {
    fList.push(x[i].childNodes[1].textContent.trim())
  }
return fList;
})();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "fetch_top_domains" ) {
 // Handle the message
 chrome.runtime.sendMessage({"message": "all_urls_fetched"});
     }
   }
 );
 