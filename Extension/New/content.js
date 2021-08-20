var fList = [],
    childList = [],
    temp = [],
    sortList = [],
    sentSortList = [],
    pageList = [],
    allLinks = [],
    sentPageList = [];

//Filter
let x = document.querySelectorAll('[data-attribute="filter"]');
for (let i = 0; i < x.length; i++) {
    fList.push({
        id: x[i].childNodes[1].textContent.trim()
    })
}
function getIds_1(tempv){
    let id = tempv.querySelectorAll('[id]');
    
    return [].slice.call(id).map(function(elem){
      return elem.id;
    });
  }
  
for (let i = 0; i < 6; i += 1) {
    if ((x[i].childNodes[3]).textContent != undefined) {
        var array = [];
        var links = x[i].getElementsByTagName("a");
        for(var j=0; j<links.length; j++) {
        array.push(links[j].href);
        }
        temp.push({
            name: x[i].childNodes[1].textContent.trim(),
            id_link:array,
            id_parrent:x[i].getAttribute('id'),
            id_child:getIds_1(x[i].childNodes[3]),
            id: (x[i].childNodes[3]).textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n').split('\n\n').filter(word => word.trim().length > 0)
        });
    }
}
console.log(temp);

//Sort
sortList = document.querySelectorAll('[data-attribute="sort"]');
sentSortList.push({
    id: (sortList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n')).split('\n\n').filter(word => word.trim().length > 0)
});

//Page
pageList = document.querySelectorAll('[data-attribute="page"]');
sentPageList.push({
    id: (pageList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n')).split('\n\n').filter(word => word.trim().length > 0)
});

//Search
searchList = document.querySelectorAll('[data-attribute="search"]');
/*console.log(searchList[0]);
console.log(searchList[0].getAttribute('action'));
console.log(searchList[0].getAttribute('method'));*/


chrome.runtime.onConnect.addListener((port) => {
    port.postMessage({
        filterList: fList,
        sentSortListAttribute: sentSortList,
        sentPageListAttribute: sentPageList,
        dropDownFilter: temp
    });
});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     let checkBoxNode = document.getElementById(request.dataAttribute);
     var chks = checkBoxNode.querySelectorAll("input[type='checkbox']");
     if(chks.checked===true)
     {
        console.log("uncheck");
        chks.forEach(c => { c.checked = false; });
     }
     else{
        console.log("check");
        chks.forEach(c => { c.checked = true; });
        checkBoxNode.click();
        }
    }
    
    
  );
  