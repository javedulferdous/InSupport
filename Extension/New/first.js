
document.addEventListener('DOMContentLoaded', function() {
    var checkfilterButton= document.getElementById('filterButton');
    checkfilterButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        var response = ["Amazon Prime", "Department", "Avg. Customer Review", "Brand", "Price", "Office Products Material", "Subscribe & Save", "From Our Brands", "Packaging Option", "Certification", "Amazon Global Store"];
        for (i = 0; i < response.length; i++) 
        { 
            var node = document.createElement("LI");  // Create a <li> node
            var textnode = document.createTextNode(response[i]); // Create a text node
            node.appendChild(textnode); 
            document.getElementById("displayList").appendChild(node); ///append Item
            console.log("Done");
        }	
      });
    }, false);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "fetch_top_domains"});
    }); 
  }, false);

 