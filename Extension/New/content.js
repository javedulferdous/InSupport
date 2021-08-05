var x, i, fList = [], childList = [], temp = [];
x = document.querySelectorAll('[data-attribute="filter"]');
for (i = 0; i < x.length; i++) {
    fList.push({id:x[i].childNodes[1].textContent.trim()})
    
}
console.log(x[5].children[1].textContent.replace(/(\r\n|\n|\r)/gm, ""));

chrome.runtime.onConnect.addListener((port) => {           
        port.postMessage({
            filterList: fList
        });
});