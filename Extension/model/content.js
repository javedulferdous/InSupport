chrome.runtime.onConnect.addListener(openModal);

let allLinks = [],filterList = [],get_class_parent_node;
let x = document.querySelectorAll('[data-attribute="filter"]');
if( window.x === undefined)
{
    console.log(get_class_parent_node);
    console.log(document.getElementsByClassName(get_class_parent_node));
    //x = document.getElementsByClassName('facets');
}
get_class_parent_node = document.querySelectorAll('[data-attribute="filter"]')[0].parentElement.getAttribute("class");

//get_class_parent_node=(((document.getElementById(document.querySelectorAll('[data-attribute="filter"]')[0].id).parentNode).children[0]).parentNode).getAttribute('class');
console.log("Class: ",get_class_parent_node);
console.log(document.getElementsByClassName(get_class_parent_node));
var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);
console.log(localStorage.getItem("someVarKey"));
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
                document.getElementById('submitButton').addEventListener('click', submitFunction);
                
                function filterFunction(){
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
                                rootClass:get_class_parent_node,
                                name: x[i].childNodes[1].textContent.trim(),
                                id_link:array,
                                id_parrent:x[i].getAttribute('id'),
                                id_child:getIds_1(x[i].childNodes[3]),
                                id: (x[i].childNodes[3]).textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n').split('\n\n').filter(word => word.trim().length > 0)
                            });
                        }
                    }
                    console.log(filterList);
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
                                console.log(allLinks);
                                //window.location.href = idLink.href;
              
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
                function submitFunction(){
                    
                    console.log("Submited");
                    for (let i = 0; i < allLinks.length; i++) {
                        //window.location.href=allLinks[i]; 
                        window.open(allLinks[i], '_self').focus();
                    };
                     allLinks=[];
                }

            }
            else {
                alert("here");
            }
        }
    });
}
class UI {
    static modalMenu(){
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            top: 250px;
            left: 500px;
            right: 500px;
            width: 40%;
            height:50%;

            overflow: auto;
            animation-name: modalopen;
            animation-duration: 0.5s;
        `;

        const modalContent = document.createElement('div');
        modalContent.classList.add("modal-content");
        modalContent.style.cssText = `
            all: initial;
            position: auto;
            float: left;
            padding: 20px;
            width: auto;
            height: 400px;
            border-radius: 100px;
            margin-left:30px;
            margin-bottom:200px;
        `;
        modalContent.innerHTML = `
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <style>
            .collapsible {
            background-color: rgb(46, 111, 171);
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 60%;
            border: none;
            text-align: center;
            outline: none;
            font-size: 20px;
        }
        .button{
            margin:0px auto; //it will center them 
          }
        .collapsible:hover {
        background-color: #555;
        }
        .content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: yellow;
            width: 60%;
        }
        
        </style>
        `;
        
        const closeButton = document.createElement('button');
        closeButton.setAttribute('id','close');
        closeButton.setAttribute('onclick','this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;');
        let closeButtonText = document.createTextNode("X");
        closeButton.className = "btn btn-primary"
        closeButton.style.cssText = `background-color:black;color:white;`;  
        closeButton.appendChild(closeButtonText);

        const submitButton = document.createElement('button');
        submitButton.setAttribute("id","submitButton");
        //submitButton.className = "btn btn-info";
        submitButton.setAttribute("value","Submit");
        submitButton.className = "submitButton";
        submitButton.innerHTML = "Submit";
        submitButton.style.cssText = `"text-align:center";`;  
        
        const divrow= document.createElement('div');
        divrow.className = "row";  
        const divcol= document.createElement('div');
        divcol.className = "col-sm"; 
        const rootDiv= document.createElement('div');
        rootDiv.className = get_class_parent_node;  
              
        const searchbtn= document.createElement('div');
        searchbtn.style.cssText = `width:800px; margin:0 auto;`;        
        searchbtn.setAttribute('id', 'searchList');

        const filterbtn= document.createElement('div');
        filterbtn.style.cssText = `width:800px; margin:0 auto;`;        
        filterbtn.setAttribute('id', 'filterList');
        filterbtn.className = get_class_parent_node;

        const sortbtn= document.createElement('div');
        sortbtn.style.cssText = `width:800px; margin:0 auto;`;        
        sortbtn.setAttribute('id', 'sortList');

        const pagebtn= document.createElement('div');
        pagebtn.style.cssText = `width:800px; margin:0 auto;`;        
        pagebtn.setAttribute('id', 'pageList');
        
        const divSubmit = document.createElement('div');
        divSubmit.setAttribute('id', 'divSubmit');
        divSubmit.className = "divSubmit";

        const searchButton = document.createElement('button');
        searchButton.setAttribute('id', 'searchButton');
        searchButton.innerText = 'Search';
        searchButton.className = "btn btn-primary"

        const filterButton = document.createElement('button');
        filterButton.setAttribute('id', 'filterButton');
        filterButton.innerText = 'Filter';
        filterButton.className = "btn btn-primary"

        const sortButton = document.createElement('button');
        sortButton.setAttribute('id', 'sortButton');
        sortButton.innerText = 'Sort';
        sortButton.className = "btn btn-primary"

        const pageButton = document.createElement('button');
        pageButton.setAttribute('id', 'pageButton');
        pageButton.innerText = 'Page';
        pageButton.className = "btn btn-primary"

        divcol.appendChild(searchButton);
        divcol.appendChild(filterButton);
        divcol.appendChild(sortButton);
        divcol.appendChild(pageButton);
       
        divcol.appendChild(closeButton);

        divcol.appendChild(sortbtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);

        divcol.appendChild(filterbtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);
        
        divcol.appendChild(pagebtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);

        divSubmit.appendChild(submitButton);
        divcol.appendChild(divSubmit);
        

        modal.appendChild(modalContent);


        return modal;
    }
    //#endregion

    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }

}