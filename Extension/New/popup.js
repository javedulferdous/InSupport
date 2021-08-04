//var response = ["Amazon Prime", "Department", "Avg. Customer Review", "Brand", "Price", "Office Products Material", "Subscribe & Save", "From Our Brands", "Packaging Option", "Certification", "Amazon Global Store"];
 //var response = [{id:"Amazon Prime"}, {id:"Department"}, {id:"Avg. Customer Review"}, {id:"Brand"}];
 var emptyList = [] 
//document.addEventListener('DOMContentLoaded', function() {
registerEvent();
function registerEvent(){
    var checkfilterButton= document.getElementById('filterButton');
    checkfilterButton.addEventListener('click', function() {
        filterList = getthelist();
        //console.log(filterList);
    chrome.tabs.getSelected(null, function(tab) {
        for (i = 0; i < filterList.length; i++) 
        { 
            var node = document.createElement("LI");  // Create a <li> node
            var textnode = document.createTextNode(filterList[i].id); // Create a text node
            node.appendChild(textnode); 
            document.getElementById("displayList").appendChild(node); ///append Item
            console.log([i+1],"Done");
        }	
      }
      
      );
    }, false);
}
 // }, false);

  function getthelist(){
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            let port = chrome.tabs.connect(tabs[0].id);

            port.onMessage.addListener((response) => {
                //console.log(response.filterList);
                for (i = 0; i < response.filterList.length; i++) {
                    emptyList.push(response.filterList[i]);
                }
                //emptyList.push(response.filterList);
                //console.log(emptyList);
                 
            });        
        });
    return emptyList;
    }
