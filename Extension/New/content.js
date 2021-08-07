var x, i, fList = [], childList = [], temp = [],sortList = [],sentSortList=[], pageList=[], sentPageList = [];

//Filter
x = document.querySelectorAll('[data-attribute="filter"]');
for (i = 0; i < x.length; i++) {
    fList.push({id:x[i].childNodes[1].textContent.trim()})
}

//Sort
sortList = document.querySelectorAll('[data-attribute="sort"]');
sentSortList.push({id:(sortList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1'+'\n')).split('\n\n').filter(word => word.trim().length > 0)});

//Page
pageList = document.querySelectorAll('[data-attribute="page"]');
sentPageList.push({id:(pageList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1'+'\n')).split('\n\n').filter(word => word.trim().length > 0)});

//Search
/*searchList = document.querySelectorAll('[data-attribute="search"]');
console.log(searchList[0]);
console.log(searchList[0].action);
console.log(searchList[0].method);
let temprary = searchList[0].children;
console.log(temprary.querySelector('value'))
*/
chrome.runtime.onConnect.addListener((port) => {           
        port.postMessage({
            filterList: fList, 
            sentSortListAttribute: sentSortList, 
            sentPageListAttribute: sentPageList
        });
});

