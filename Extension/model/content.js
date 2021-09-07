chrome.runtime.onConnect.addListener(openModal);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Processing
let allLinks = [],filterList = [],get_class_parent_node;


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
                            if(window.document.getElementsByClassName('a-section a-spacing-double-large')[0]=== undefined)
                            {
                                alert("No filter group");
                                window.location.reload();
                            }
                            else{
                                x = document.getElementsByClassName('a-section a-spacing-double-large')[0].childNodes;
                               get_class_parent_node = document.getElementsByClassName('a-section a-spacing-double-large')[0].parentElement.getAttribute("class");
                            }
                        }
                        // Walmart
                        else if(domain_name === 'walmart'){
                            console.log('walmart');
                        }
                        else if(domain_name === 'ebay'){
                            console.log('ebay');
                            x = document.getElementsByClassName('x-refine__left__nav')[0].childNodes;
                        }
                        console.log(x);
                        
                    }
                    function getIds_1(tempv){
                        let id = tempv.querySelectorAll('[id]');
                        return [].slice.call(id).map(function(elem){
                          return elem.id;
                        });
                    }
                    //setTimeout("location.reload(true);", 10000);

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
                            /*let node_ =(document.getElementsByClassName('a-section a-spacing-double-large')[0].children[3]);
                            let checkNode = node_.getElementsByTagName('input');
                            if(checkNode){
                                console.log(checkNode[0].hasAttribute('checked'));
                                console.log(node_.getRootNode());
                            }*/
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
                                window.location.href = idLink.href;
              
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
                function searchFunction(){
                    let searchInfo = [];
                    if(document.location.hostname === '')
                    {
                        console.log("saved page");
                        let searchNode = (document.querySelector('[data-attribute="search"]')).childNodes[3].children[0].getElementsByTagName('input');
                        console.log(searchNode[0].value);
                        console.log((document.querySelector('[data-attribute="search"]')).getAttribute('id'));
                        console.log((document.querySelector('[data-attribute="search"]')).getAttribute('class'));
                        console.log(searchNode[0].getAttribute('class'));
                        console.log('https://www.amazon.com/s?k='+searchNode[0].value.replace(' ','+')+"&ref=nb_sb_noss_2");
                        
                        searchInfo.push({
                            input_id:(document.querySelector('[data-attribute="search"]')).getAttribute('id'),
                            input_class:(document.querySelector('[data-attribute="search"]')).getAttribute('class'),
                            id_search: searchNode[0].value,
                            id_search_link:'https://www.amazon.com/s?k='+searchNode[0].value.replace(' ','+'),
                            searchButtonClass: searchNode[0].getAttribute('class')
                        });
                        
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'amazon')
                    {
                        console.log("amazon live");
                        //console.log(((document.getElementById('nav-search-bar-form')).getAttribute('id')));
                        let livesearchNode = document.getElementById('nav-search-bar-form');
                        //console.log((document.getElementById('nav-search-bar-form')).getAttribute('class'));
                        //console.log(((livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0]).value).getAttribute('class'));
                        //console.log((document.getElementsByClassName('nav-input nav-progressive-attribute')).value);
                        console.log(livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0].value.replace(' ','+'));
                        searchInfo.push({
                            input_id:(document.getElementById('nav-search-bar-form')).getAttribute('id'),
                            input_class:(document.getElementById('nav-search-bar-form')).getAttribute('class'),
                            id_search: livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0].value,
                            id_search_link:'https://www.amazon.com/s?k='
                            //searchButtonClass: (livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0]).value.getAttribute('class')
                        });
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        let eBaySearchNode = document.getElementById('gh-ac-box2');
                        console.log(eBaySearchNode.getElementsByTagName('input')[0].value);
                        console.log(eBaySearchNode.getElementsByTagName('input')[0].getAttribute('id'));
                        console.log(eBaySearchNode.getElementsByTagName('input')[0].getAttribute('class'));

                        searchInfo.push({
                            input_id:eBaySearchNode.getElementsByTagName('input')[0].getAttribute('id'),
                            input_class:eBaySearchNode.getElementsByTagName('input')[0].getAttribute('id'),
                            id_search: eBaySearchNode.getElementsByTagName('input')[0].value,
                            id_search_link:'https://www.ebay.com/sch/i.html?_nkw='
                            //searchButtonClass: (livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0]).value.getAttribute('class')
                        });
                    }
                    try{
                            let inputBox = document.createElement('input');
                            inputBox.className = searchInfo[0].input_class;
                            inputBox.setAttribute('id','nav-search-bar-form');
                            inputBox.setAttribute('value',searchInfo[0].id_search);
                            inputBox.className= "input-group-append";

                            let buttonNode = document.createElement('input');
                            buttonNode.setAttribute('type', 'submit');
                            buttonNode.setAttribute('value', 'Search');
                            buttonNode.className = "btn btn-primary";
                            buttonNode.onclick = function(){
                                let inputItem = document.getElementById('nav-search-bar-form').value;
                                if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='amazon')
                                {
                                    window.location.href = 'https://www.amazon.com/s?k='+inputItem.replace(' ','+')
                                }
                                else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='ebay'){
                                    window.location.href = 'https://www.ebay.com/sch/i.html?_nkw='+inputItem.replace(' ','+')
                                }
                            }
                            document.getElementById("searchList").appendChild(inputBox);
                            document.getElementById("searchList").appendChild(buttonNode);


                    }
                    catch(e){console.log(e);}
                }
                function sortFunction(){
                    let sortName = [],sortNumber=[];
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
                        if(window.document.getElementsByClassName('a-native-dropdown a-declarative')[0]===undefined)
                        {
                            alert("Sort is not available");
                            window.location.reload();
                        }
                        else
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
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        if(window.document.getElementsByClassName('fake-menu__items')[0]===undefined)
                        {
                            alert("Sort is not available");
                            window.location.reload();
                        }
                        else{
                        let sortClass = document.getElementsByClassName('srp-controls__row-cells right clearfix')[0];
                        for(let i=0; i<6; i++){
                            sortName.push(sortClass.children[0].getElementsByTagName('li')[i].textContent);
                            sortNumber.push(((sortClass.children[0].getElementsByTagName('li')[i]).getElementsByTagName('a')[0]).getAttribute('href'));
                            }
                        }
                    }
                    var list = document.createElement("ul");
                    for (var i in sortName) {
                        var hLink = document.createElement("a");
                        hLink.text = sortName[i];
                        hLink.target = '_self';
                        hLink.href = sortNumber[i];
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
                        if(document.getElementsByClassName('s-pagination-strip')[0]===undefined){
                            alert("Page is not available");
                            window.location.reload();
                        }
                        else{
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
                        
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        console.log('eBay');
                        if(document.getElementsByClassName('pagination__items')[0]===undefined){
                            alert("Page is not available");
                            window.location.reload();
                        }
                        else{
                            let pageClass = document.getElementsByClassName('pagination__items');
                            try{
                                for(let i=0; i<20; i++)
                                {
                                    if(pageClass[0].children[i]!='undefined')
                                    {
                                        console.log((pageClass[0].children[i]).getElementsByTagName('a')[0].href);
                                        console.log((pageClass[0].children[i]).getElementsByTagName('a')[0].textContent);
                                        sentPageList.push({
                                            id: (pageClass[0].children[i]).getElementsByTagName('a')[0].textContent,
                                            id_link_page: (pageClass[0].children[i]).getElementsByTagName('a')[0].href
                                        });
                                    }
                                }
                            }
                            catch(e){
                                console.log(e);
                            }
                        }
                    }
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
            left: 45%;
            right: 500px;
            width: 80%;
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
            width: auto%;
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
        //searchbtn.style.cssText = `width:800px; margin:0 auto;`;        
        searchbtn.setAttribute('id', 'searchList');

        const filterbtn= document.createElement('div');
        //filterbtn.style.cssText = `width:800px; margin:0 auto;`;        
        filterbtn.setAttribute('id', 'filterList');
        filterbtn.className = get_class_parent_node;

        const sortbtn= document.createElement('div');
        //sortbtn.style.cssText = `width:800px; margin:0 auto;`;        
        sortbtn.setAttribute('id', 'sortList');

        const pagebtn= document.createElement('div');
        //pagebtn.style.cssText = `width:800px; margin:0 auto;`;        
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

        divcol.appendChild(searchbtn);
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

