var fList = [],
    childList = [],
    temp = [],
    sortList = [],
    sentSortList = [],
    pageList = [],
    sentPageList = [];

//Filter
let x = document.querySelectorAll('[data-attribute="filter"]');
for (let i = 0; i < x.length; i++) {
    fList.push({
        id: x[i].childNodes[1].textContent.trim()
    })
}
for (let i = 0; i < 6; i += 1) {
    if ((x[i].childNodes[3]).textContent != []) {
        temp.push({
            name: x[i].childNodes[1].textContent.trim(),
            id: (x[i].childNodes[3]).textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n').split('\n\n').filter(word => word.trim().length > 0)
        });
    }
}

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

