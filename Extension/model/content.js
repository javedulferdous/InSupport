chrome.runtime.onConnect.addListener(openModal);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Processing
let allLinks = [],filterList = [],get_class_parent_node;

try {
    if(document.querySelector('*[data-attribute="filter"]').getAttribute('data-attribute')==='filter')
    {
        x = document.querySelectorAll('[data-attribute="filter"]');
    }
}
catch(e)
{
    let domain_name = document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '');
    // Amazon
    if(domain_name === 'amazon'){
        x = document.getElementsByClassName('a-section a-spacing-double-large')[0].childNodes;
        get_class_parent_node = document.getElementsByClassName('a-section a-spacing-double-large')[0].parentElement.getAttribute("class");
    }
    // Walmart
    else if(domain_name === 'walmart'){
        console.log('walmart');
    }
    else if(domain_name === 'ebay'){
        console.log('ebay');
        x = document.getElementsByClassName('x-refine__left__nav')[0].childNodes;
    }
}
/*if( window.x === undefined)
{
    //x = document.getElementsByClassName('a-section a-spacing-double-large')[0].childNodes;
    //console.log(x);
}*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
                    setTimeout("location.reload(true);", 10000);

                    if(document.location.hostname === '')
                    {
                        console.log("saved page");
                        try{
                        for (let i = 1; i < 6; i += 1) {
                            //if ((x[i].childNodes[3]).textContent != undefined) {
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
                           // }
                            }
                        }
                        catch(e){}
                        console.log(filterList);
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'amazon'){
                        console.log("amazon live");
                        try{
                            for (let i=1; i<=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].length; i=i+2){
                                console.log(i);
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
                    catch(e)
                    {
                        console.log(e);
                    }
                        console.log(filterList);
                        
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        console.log("ebay");
                        try
                        {
                            for( let i =1; i<=[1].length; i++)
                            {
                                //console.log(x[i].getElementsByTagName('div')[0].textContent);
                                console.log(x[i].getElementsByTagName('div')[0].children);
                                filterList.push({
                                    name: x[i].getElementsByTagName('div')[0].textContent
                                })
                            }
                        }
                        catch(e)
                        {
                        }
                        console.log(filterList);
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
                    if(document.location.hostname === '')
                    {
                        console.log("saved page");
                        let sortList = document.querySelectorAll('[data-attribute="sort"]');
                        try{
                            for(let i=1; i<10;i++)
                            {
                            //console.log(sortList[0].childNodes[1][i].textContent);
                            //console.log("www.amazon.com"+(sortList[0].childNodes[1])[i].getAttribute('data-url'));
                            sentSortList.push({
                                id: sortList[0].childNodes[1][i].textContent,
                                id_sort_link:"https://www.amazon.com"+(sortList[0].childNodes[1])[i].getAttribute('data-url')
                            });
                            }
                        }
                        catch(e){console.log(e);}
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'amazon')
                    {
                        let sortClass = document.getElementsByClassName('a-native-dropdown a-declarative');
                        try{
                            for(let i=1; i< 10; i=i+2)
                            {
                                //console.log("https://www.amazon.com"+sortClass[0].childNodes[i].getAttribute('data-url'));
                                //console.log(sortClass[0].childNodes[i].textContent);
                                sentSortList.push({
                                    id: sortClass[0].childNodes[i].textContent,
                                    id_sort_link:"https://www.amazon.com"+sortClass[0].childNodes[i].getAttribute('data-url')
                                });
                            }
                        }
                        catch(e){}
                    }
                    console.log(sentSortList);
                    var list = document.createElement("ul");
                    for (var i in sentSortList) {
                        var hLink = document.createElement("a");
                        hLink.text = sentSortList[i].id;
                        hLink.target = '_self';
                        hLink.href = sentSortList[i].id_sort_link;
                        var node = document.createElement("LI");
                        node.className = "list-group-item list-group-item-action";
                        var nodeBreak = document.createElement("br");
                        node.appendChild(hLink);
                        node.appendChild(nodeBreak);
                        document.getElementById("sortList").appendChild(node); ///append Item
                    }
                }
                function pageFunction(){
                    let sentPageList = [];
                    if(document.location.hostname === '')
                    {
                        console.log("saved page");
                        let pageList = document.querySelectorAll('[data-attribute="page"]');
                        let linkurl = pageList[0].getElementsByTagName('a');
                        try{
                        let temp = pageList[0].childNodes[0].childNodes;
                        for(let i in temp){
                            if(linkurl[i]!== 'undefined')
                            {
                                console.log(linkurl[i].href);
                                console.log(linkurl[i].textContent);
                                sentPageList.push({
                                    id: linkurl[i].textContent,
                                    id_link_page: linkurl[i].href
                                });
                            }
                            }
                        }
                        catch(e){}
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'amazon')
                    {
                        console.log("amazon live");
                        let pageClass = document.getElementsByClassName('s-pagination-strip');
                        try{
                            for(let i=0; i<20; i++)
                            {
                                if(pageClass[0].children[i]!='undefined')
                                {
                                    console.log((pageClass[0].children[i]).href);
                                    console.log((pageClass[0].children[i]).textContent);
                                    sentPageList.push({
                                        id: (pageClass[0].children[i]).textContent,
                                        id_link_page: (pageClass[0].children[i]).href
                                    });
                                }
                                //console.log(pageClass[0].getElementsByTagName('a'));
                            }
                        }
                        catch(e){
                            console.log(e);
                        }
                        
                    }
                    console.log(sentPageList);
                    for (i = 0; i < sentPageList.length; i++) {
                        var hLink = document.createElement("a");
                        hLink.text = sentPageList[i].id;
                        hLink.target = '_self';
                        hLink.href = sentPageList[i].id_link_page;
                        var node = document.createElement("LI");
                        node.className = "list-group-item list-group-item-action";
                        var nodeBreak = document.createElement("br");
                        node.appendChild(hLink);
                        node.appendChild(nodeBreak);
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
                setTimeout("location.reload(true);", 1000);
            }
        }
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class UI {
    static modalMenu(){
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            top: 50%;
            left: 50%;
            right: 500px;
            width: 400px;
            height: 200pxßß;
            position: fixed;
            z-index:100;
            margin: -100px 0 0 -100px;

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
            margin-left:auto;
            margin-right: auto;
            margin-bottom:auto;
            display: flex;
            justify-content: center;
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
        closeButton.setAttribute('onclick','this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); setTimeout("location.reload(true);", 10); return false; ');
        let closeButtonText = document.createTextNode("X");
        closeButton.className = "btn btn-primary"
        closeButton.style.cssText = `background-color:black;color:white;`;  
        closeButton.appendChild(closeButtonText);
        // Back button
        const backButton = document.createElement('button');
        backButton.setAttribute('id','backbtn');
        backButton.setAttribute('onclick','window.history.back();');
        let backButtonText = document.createTextNode("Back");
        backButton.className = "btn btn-primary"
        backButton.style.cssText = `background-color:yellow;color:blue;`;  
        backButton.appendChild(backButtonText);

        const submitButton = document.createElement('button');
        submitButton.setAttribute("id","submitButton");
        submitButton.className = "btn btn-info";
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

        divcol.appendChild(backButton);

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

        /*divSubmit.appendChild(submitButton);
        divcol.appendChild(divSubmit);*/
        

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

