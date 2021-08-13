//var response = ["Amazon Prime", "Department", "Avg. Customer Review", "Brand", "Price", "Office Products Material", "Subscribe & Save", "From Our Brands", "Packaging Option", "Certification", "Amazon Global Store"];
 //var response = [{id:"Amazon Prime"}, {id:"Department"}, {id:"Avg. Customer Review"}, {id:"Brand"}];
 var emptyList = [], emptySortList = [], emptyPageList=[]; 
 let domList = document.getElementById("displayList");
//document.addEventListener('DOMContentLoaded', function() {
registerEvent();

function registerEvent(){
    // Clicking the Filter Button
    var checkfilterButton= document.getElementById('filterButton');
    checkfilterButton.addEventListener('click', function() {
    
    filterList = getthelist();
    chrome.tabs.getSelected(null, function(tab) {
        for (i = 0; i < filterList.length; i++) 
        // creating input box as button 
        {   var cinput = document.createElement("input");
            cinput.setAttribute('type', 'submit');
            cinput.setAttribute('value', filterList[i].name);
            cinput.setAttribute("class", "collapsible");
            cinput.setAttribute("id", "collapsible");
            cinput.setAttribute("data-toggle", "collapse");
            cinput.setAttribute("data-target", "#demo");
        // adding button in the dom
            document.body.appendChild(cinput);
        // creating div to store all the checkbox and label
            let node = document.createElement("div");
            node.className = 'content';
        // creating a list for all subgroup
        for(let j = 0; j<filterList[i].id.length; j++)
        {
            let brk = document.createElement('br');
            let checkbox = document.createElement('input');
            let cbutton = document.createTextNode(filterList[i].id[j]);
            checkbox.type = "checkbox";
            node.appendChild(checkbox);
            node.appendChild(cbutton);
            node.appendChild(brk);
            document.body.appendChild(node);
        }
        }	
        var coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                console.log(filterList[i].id);
                
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
            })
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
            domList.appendChild(node); ///append Item
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
        var form = document.createElement('form');
        form.setAttribute('action', 'https://www.amazon.com/s/ref=nb_sb_noss_2');
        form.setAttribute('method', 'GET');
        form.setAttribute('role', 'search');

        var text_field = document.createElement('input');
        text_field.setAttribute('type', 'text');
        text_field.setAttribute('value', '');

        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        button.setAttribute('value', 'Search');

        form.appendChild(text_field);
        form.appendChild(button);

        document.body.appendChild(form);
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
                for (i = 0; i < response.dropDownFilter.length; i++) {
                    emptyList.push(response.dropDownFilter[i]);
                }
                //emptyList.push(response.filterList);
                //console.log(emptyList);
                console.log("From Popup script",response.dropDownFilter);
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
function testingFunction()
{
    for (let i = 0; i < filterList.length; i++) 
        {   let aLink = document.createElement("a");
            aLink.text = filterList[i].id;

            var node = document.createElement("LI");
            node.appendChild(aLink);
            console.log(filterList[i].id); 
            return node;          
        }	
}
getthesortlist();
getthelist();
getthepagelist();
