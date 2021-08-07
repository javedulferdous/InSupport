//var response = ["Amazon Prime", "Department", "Avg. Customer Review", "Brand", "Price", "Office Products Material", "Subscribe & Save", "From Our Brands", "Packaging Option", "Certification", "Amazon Global Store"];
 //var response = [{id:"Amazon Prime"}, {id:"Department"}, {id:"Avg. Customer Review"}, {id:"Brand"}];
 var emptyList = [], emptySortList = [], emptyPageList=[]; 
//document.addEventListener('DOMContentLoaded', function() {
registerEvent();
function registerEvent(){
    // Clicking the Filter Button
    var checkfilterButton= document.getElementById('filterButton');
    checkfilterButton.addEventListener('click', function() {
        filterList = getthelist();
        //console.log(filterList);
    chrome.tabs.getSelected(null, function(tab) {
        for (i = 0; i < filterList.length; i++) 
        {   var hLink = document.createElement("a");
            hLink.text = filterList[i].id;
            hLink.target = '_blank';
            hLink.href = 'https://www.amazon.com/';
            var node = document.createElement("LI");
            node.appendChild(hLink);
            document.getElementById("displayList").appendChild(node); ///append Item
            //var node = document.createElement("LI");  // Create a <li> node
            //var textnode = document.createTextNode(filterList[i].id); // Create a text node
            //node.appendChild(textnode); 
            //document.getElementById("displayList").appendChild(node); ///append Item
            console.log([i+1],"Filter");
            console.log(window.location);
        }	
      }
      
      );
    }, false);
    //Clicking the Sort Button
    var checkSortButton= document.getElementById('sortButton');
    checkSortButton.addEventListener('click', function() {
    sortList = getthesortlist();
    chrome.tabs.getSelected(null, function(tab) {
        for (i = 0; i < sortList.length; i++) 
        {   var hLink = document.createElement("a");
            hLink.text = sortList[i];
            hLink.target = '_blank';
            hLink.href = 'https://www.amazon.com/';
            var node = document.createElement("LI");
            node.appendChild(hLink);
            document.getElementById("displayList").appendChild(node); ///append Item
            //var node = document.createElement("LI");  // Create a <li> node
            //var textnode = document.createTextNode(filterList[i].id); // Create a text node
            //node.appendChild(textnode); 
            //document.getElementById("displayList").appendChild(node); ///append Item
            console.log([i+1],"Sort");
        }	
      }
      
      );
    }, false);
    //Clicking the Page Button
    var checkPageButton= document.getElementById('pageButton');
    checkPageButton.addEventListener('click', function() {
    pageList = getthepagelist();
    chrome.tabs.getSelected(null, function(tab) {
        for (i = 0; i < pageList.length; i++) 
        {   var hLink = document.createElement("a");
            hLink.text = pageList[i];
            hLink.target = '_blank';
            hLink.href = 'https://www.amazon.com/';
            var node = document.createElement("LI");
            node.appendChild(hLink);
            document.getElementById("displayList").appendChild(node); ///append Item
            //var node = document.createElement("LI");  // Create a <li> node
            //var textnode = document.createTextNode(filterList[i].id); // Create a text node
            //node.appendChild(textnode); 
            //document.getElementById("displayList").appendChild(node); ///append Item
            console.log([i+1],"Page");
        }	
      }
      
      );
    }, false);
    //Clicking the Search Button
    var checkSearchButton= document.getElementById('searchButton');
    checkSearchButton.addEventListener('click', function() {
        /*var form = document.createElement('form');
        form.setAttribute('action', 'https://www.amazon.com/s/ref=nb_sb_noss_2');
        form.setAttribute('method', 'post');

        var text_field = document.createElement('input');
        text_field.setAttribute('type', 'text');
        text_field.setAttribute('value', 'enter something here...');

        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        button.setAttribute('value', 'Go!');

        form.appendChild(text_field);
        form.appendChild(button);

        document.body.appendChild(form);*/
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
                console.log("From Popup script",response.filterList);
            });        
        });
    return emptyList;
}
function getthesortlist(){
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        let port = chrome.tabs.connect(tabs[0].id);

        port.onMessage.addListener((response) => {
            for (i = 0; i < response.sentSortListAttribute[0].id.length; i++) {
                emptySortList.push(response.sentSortListAttribute[0].id[i]);
            }
            console.log("From Popup script",emptySortList);
        });        
    });
return emptySortList;
}
function getthepagelist(){
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        let port = chrome.tabs.connect(tabs[0].id);

        port.onMessage.addListener((response) => {
            console.log(response.sentPageListAttribute[0].id);
            for (i = 0; i < response.sentPageListAttribute[0].id.length; i++) {
                emptyPageList.push(response.sentPageListAttribute[0].id[i]);
            }
            console.log(emptyPageList);
        });        
    });
return emptyPageList;
}

getthesortlist();
getthelist();
getthepagelist();
