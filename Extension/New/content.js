console.log("content scripts");
var x, i, fList = [];
x = document.querySelectorAll('[data-attribute="filter"]');
var list = document.createElement('ul');
for (i = 0; i < x.length; i++) {
    fList.push({id:x[i].childNodes[1].textContent.trim()})
}
//console.log(fList);

//var listFilter = [{id:"Amazon Prime"}, {id:"Department"}, {id:"Avg. Customer Review"}, {id:"Brand"}];

chrome.runtime.onConnect.addListener((port) => {           
        port.postMessage({
            filterList: fList
        });
});