chrome.runtime.onConnect.addListener(openModal);
let allLinks = [];
function openModal(port) {
    port.onMessage.addListener(request => {
        if (request.action == "openModal") {           
            let modal = document.querySelector('#modalMenu');
            let body = document.querySelector('body');
            if (!modal) {
                body.insertBefore(UI.modalMenu(), body.firstChild);
                let filterdata = document.getElementById('filterButton');
                filterdata.addEventListener('click', filterFunction);
                document.getElementById('searchButton').addEventListener('click', searchFunction);
                document.getElementById('sortButton').addEventListener('click', sortFunction);
                document.getElementById('pageButton').addEventListener('click', pageFunction);
                
                function filterFunction(){
                    let filterList = [];
                    let x = document.querySelectorAll('[data-attribute="filter"]');
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
                            filterList.push({
                                name: x[i].childNodes[1].textContent.trim(),
                                id_link:array,
                                id_parrent:x[i].getAttribute('id'),
                                id_child:getIds_1(x[i].childNodes[3]),
                                id: (x[i].childNodes[3]).textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n').split('\n\n').filter(word => word.trim().length > 0)
                            });
                        }
                    }
                    for (i = 0; i < filterList.length; i++)
                    {
                        var cinput = document.createElement("input");
                        cinput.setAttribute('type', 'submit');
                        cinput.setAttribute('value', filterList[i].name);
                        cinput.setAttribute("class", "collapsible");
                        cinput.setAttribute("id", "collapsible");
                        cinput.setAttribute("data-toggle", "collapse");
                        cinput.setAttribute("data-target", "#demo");
                        // adding button in the dom
                        document.getElementById("filterList").appendChild(cinput);
                        let node = document.createElement("div");
                        node.className = 'content';
                        // creating a list for all subgroup
                        for (let j = 0; j < filterList[i].id.length; j++) {
                            let brk = document.createElement('br');
                            let checkbox = document.createElement('input');
                            let idLink = document.createElement('a');
                            //console.log(filterList[i].id_child[j]);
                            idLink.href = filterList[i].id_link[j];
                            idLink.innerHTML = filterList[i].id[j];
                            idLink.target = "_self";
                            checkbox.type = "checkbox";
                            checkbox.id = filterList[i].id_child[j];
                            checkbox.name = filterList[i].id[j];
                            checkbox.onclick = function(e){
                                
                                allLinks.push(idLink.href);
                                //window.location.href = idLink.href;
                                for (let i = 0; i < allLinks.length; i++) {
                                    console.log(i);
                                    if (i ===allLinks.length){
                                        window.location.href = allLinks[i].href;
                                    }
                                   
                                };
                            };
                            
                            checkbox.appendChild(idLink);
                            node.appendChild(checkbox);
                            node.appendChild(idLink);
                            node.appendChild(brk);
                            document.getElementById("filterList").appendChild(node);
                        }
                    }
                    var coll = document.getElementsByClassName("collapsible");
                    for (let i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function() {
                        var content = this.nextElementSibling;
                        if (content.style.display === "block") {
                            content.style.display = "none";
                        } else {
                            content.style.display = "block";
                        }
                    })
                    }
                }
                function searchFunction(){alert("Search");}
                function sortFunction(){
                    let sentSortList = [];
                    let sortList = document.querySelectorAll('[data-attribute="sort"]');
                    
                    sentSortList.push({
                        id: (sortList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n')).split('\n\n').filter(word => word.trim().length > 0)
                    });
                    console.log(sentSortList);

                    var list = document.createElement("ul");
                    for (var i in sentSortList) {
                        let textnode = document.createTextNode(sentSortList[i].id);
                        var elem = document.createElement("li");
                        var breaknode = document.createElement("br");
                        elem.appendChild(textnode);
                        elem.appendChild(breaknode);
                        list.appendChild(elem);
                        document.getElementById("sortList").appendChild(list);
                    }
                }
                function pageFunction(){
                    let sentPageList = [];
                    let pageList = document.querySelectorAll('[data-attribute="page"]');
                    sentPageList.push({
                        id: (pageList[0].textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n')).split('\n\n').filter(word => word.trim().length > 0)
                    });
                    console.log(sentPageList);
                    for (i = 0; i < sentPageList.length; i++) {
                        var hLink = document.createElement("a");
                        hLink.text = sentPageList[i].id;
                        hLink.target = '_blank';
                        hLink.href = 'https://www.amazon.com/';
                        var node = document.createElement("LI");
                        node.appendChild(hLink);
                        document.getElementById("pageList").appendChild(node); ///append Item
                    }
                
                }

            }
            else {
                // on click, if modal already exists, toggle display to none
                modal.classList.toggle('toggleMenu');
            }
        }
    });
}