chrome.runtime.onConnect.addListener(openModal);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Processing
let allLinks = [],filterList = [],get_class_parent_node, tempID = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function openModal(port) {
    port.onMessage.addListener(request => {
        if (request.action == "openModal") {           
            let modal = document.querySelector('#modalMenu');
            let body = document.querySelector('body');
            if (!modal) {
                body.insertBefore(UI.modalMenu(), body.firstChild);
                let filterdata = document.getElementById('filterButton');
                document.getElementById("searchButton").focus();
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
                            //console.log('ebay');
                        }          
                        else if(domain_name === 'target'){
                            console.log('target');
                        }
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
                            for (let i=1; i<=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].length; i=i+2){
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
                                        id_id_name: 1,
                                        id_parrent:x[i].getAttribute('id'),
                                        id_child:getIds_1(x[i].childNodes[3]),
                                        id: (x[i].childNodes[3]).textContent.replace(/(.*?\s.*?\s)/g, '$1' + '\n').split('\n\n').filter(word => word.trim().length > 0)
                                    });
                            }
                            /*try
                            {
                                if(document.getElementsByClassName('a-section a-spacing-double-large')[0].children[7].getAttribute('id')==='filters'){
                                console.log('filters');
                                for(let i=0;i<30;i=i+2){
                                    console.log(document.getElementsByClassName('a-section a-spacing-double-large')[0].children[7].children[i].textContent.trim());
                                    filterList.push({
                                        name: document.getElementsByClassName('a-section a-spacing-double-large')[0].children[7].children[i].textContent.trim(),
                                        id_id_name: 1,
                                        id: document.getElementsByClassName('a-section a-spacing-double-large')[0].children[7].children[i].textContent.trim()

                                    });
                                }
                            }
                            }
                            
                            catch(e)
                            {
                                console.log(e);
                            }*/

                    }
                    catch(e)
                    {
                        console.log(e);
                    }                        
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        try{
                            for(let i=0; i<=8; i++)
                            {
                                let temp_id = [], temp_link = [],temp_id_child=[], temp_name = [];
                                let idVar = 'x-refine__group_1__'+i;
                                if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__1')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        //console.log([i],((document.getElementById('x-refine__group_1__0').children[0]).children[j].textContent));
                                        //console.log([i],((document.getElementById('x-refine__group_1__0').children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,//working till now
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__0')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__2')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__3')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__4')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__5')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__6')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__7')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                                else if(document.getElementById(idVar).getAttribute('id')==='x-refine__group_1__8')
                                {
                                    
                                    for(let j =0; j<(document.getElementById(idVar).children[0]).children.length; j++){
                                        temp_name = (document.getElementsByClassName('x-refine__left__nav'))[1].getElementsByTagName('h3')[i].textContent
                                        temp_id.push(((document.getElementById(idVar).children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('href'));
                                        temp_id_child.push(((document.getElementById(idVar).children[0]).children[j]).getElementsByTagName('a')[0].getAttribute('class'));
                                        
                                    }
                                    filterList.push({
                                        name: temp_name,
                                        id: temp_id,
                                        id_link:temp_link,
                                        id_child:temp_id_child,
                                        id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                    })
                                }
                            }                  
                            }
                        catch(e){ console.log(e);}
                            // Group 0
                        try{
                            if(document.getElementById('x-refine__group__0')){
                                let temp_id = [], temp_link = [];
                                //console.log(document.getElementsByClassName('srp-refine__category__item srp-refine__category__list--flush')[0].children[0].textContent);
                                //console.log(document.getElementsByClassName('srp-refine__category__item srp-refine__category__list--flush')[0].children[1].children[1].children[0].textContent);
                                for(let i=0; i<document.getElementsByClassName('srp-refine__category__item').length; i++){
                                    if(document.getElementsByClassName('srp-refine__category__item')[i].nodeValue===0){
                                        //console.log(document.getElementsByClassName('srp-refine__category__item')[i].textContent);
                                        console.log([i]);
                                        
                                    }
                                    else{
                                        temp_id.push(document.getElementsByClassName('srp-refine__category__item')[i].children[0].innerText);
                                        temp_link.push(document.getElementsByClassName('srp-refine__category__item')[i].children[0].getAttribute('href'));
                                    }
                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__0').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                })
                            }
                            // Group 2
                            if(document.getElementById('x-refine__group__2')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<((document.getElementById('x-refine__group__2').children[0]).children.length);j++)
                                {
                                    //console.log([j],((document.getElementById('x-refine__group__2').children[0]).children[j].textContent));
                                    //console.log(((document.getElementById('x-refine__group__2').children[0]).children[j]).children[0].children[0].getAttribute('href'))
                                    temp_id.push(((document.getElementById('x-refine__group__2').children[0]).children[j].textContent))
                                    temp_link.push(((document.getElementById('x-refine__group__2').children[0]).children[j]).children[0].children[0].getAttribute('href'));

                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__2').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                })
                            }
                            // Group 3  working but has one issue
                            if(document.getElementById('x-refine__group__3')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<3;j++) // right here
                                {
                                    temp_id.push(((document.getElementById('x-refine__group__3').children[0]).children[j].textContent));
                                    temp_link.push((((document.getElementById('x-refine__group__3').children[0]).children[j]).children[0].children[0].getAttribute('href')));
                                }

                                filterList.push({
                                    name: document.getElementById('x-refine__group__3').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: ['id1','id2','id3']
                                })
        
                            }
                            // Group 4
                            if(document.getElementById('x-refine__group__4')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<((document.getElementById('x-refine__group__4').children[0]).children.length);j++)
                                {
                                    temp_id.push(((document.getElementById('x-refine__group__4').children[0]).children[j].textContent))
                                    temp_link.push(((document.getElementById('x-refine__group__4').children[0]).children[j]).children[0].children[0].getAttribute('href'));

                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__4').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                })
                            }
                            // Group 5 [Has issue]
                            if(document.getElementById('x-refine__group__5')){
                                let temp_id =[], temp_5_link=[];
                                for(let m=0;m<5;m++)
                                {
                                    if(document.getElementsByClassName('x-refine__single-select__drop-down-text-form')[0])
                                    {
                                        console.log('x-refine__single-select__drop-down-text-form');
                                        continue;
                                    }
                                    temp_id.push((document.getElementById('x-refine__group__5').children[0].children[m].innerText));
                                    temp_5_link.push(((document.getElementById('x-refine__group__5').children[0]).children[m]).children[0].children[0].getAttribute('href'));
 
                                }
                                for(let k=0;k<10;k++){
                                    temp_id.push((document.getElementsByClassName('select')[1].children[0]).children[k].innerText);
                                    let temp_var = (document.getElementsByClassName('select')[1].children[0]).children[k].innerText.replace(/[^0-9]/g, '')
                                    let final_var = "&_sadis="+temp_var+"&rt=nc&LH_PrefLoc=99&_fspt=1";
                                    if(window.location.search.search('_sadis')===-1)
                                    {
                                        temp_5_link.push("https://www.ebay.com/sch/i.html"+(window.location.search)+final_var);
                                    }
                                    if(window.location.search.search('_sadis')!==-1)
                                    {
                                        console.log("here");
                                        temp_5_link.push("https://www.ebay.com/sch/i.html"+(window.location.search).replace(/_sadis=/gi, final_var));
                                    }
                                    
                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__5').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_5_link,
                                    id_id_name: ['a','b','c','d','e','f','g']
                                })
                            }
                            // Group 6 
                            if(document.getElementById('x-refine__group__6')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<((document.getElementById('x-refine__group__6').children[0]).children.length);j++)
                                {
                                    temp_id.push(((document.getElementById('x-refine__group__6').children[0]).children[j].textContent))
                                    temp_link.push(((document.getElementById('x-refine__group__6').children[0]).children[j]).children[0].children[0].getAttribute('href'));

                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__6').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                })
                            }
                            // Group 7 [Has issue- Partial]
                            if(document.getElementById('x-refine__group__7')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<((document.getElementById('x-refine__group__7').children[0]).children.length);j++)
                                {
                                    if(document.getElementById('x-refine__group__7').children[0].children[j].getAttribute('name')==='LH_PrefLoc')
                                    {
                                        //console.log("here");
                                        continue;
                                    }
                                    
                                        temp_id.push(((document.getElementById('x-refine__group__7').children[0]).children[j].textContent))
                                        temp_link.push(((document.getElementById('x-refine__group__7').children[0]).children[j]).children[0].children[0].getAttribute('href'));
                                    
                                }
                                for(let k=0;k<10;k++){
                                    temp_id.push((document.getElementsByClassName('select')[1].children[0]).children[k].innerText);
                                    //console.log((document.getElementsByClassName('select')[1].children[0]).children[k].innerText.replace(/[^0-9]/g, ''));
                                    let temp_var = (document.getElementsByClassName('select')[1].children[0]).children[k].innerText.replace(/[^0-9]/g, '')
                                    let final_var = "&_sadis="+temp_var+"&rt=nc&LH_PrefLoc=99&_fspt=1";
                                    if(window.location.search.search('_sadis')===-1)
                                    {
                                        temp_link.push("https://www.ebay.com/sch/i.html"+(window.location.search)+final_var);
                                    }
                                    if(window.location.search.search('_sadis')!==-1)
                                    {
                                        console.log("here");
                                        temp_link.push("https://www.ebay.com/sch/i.html"+(window.location.search).replace(/_sadis=/gi, final_var));
                                    }
                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__7').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: ['lp1','lp2','lp3']
                                })
                            }
                            // Group 8 
                            if(document.getElementById('x-refine__group__8')){
                                let temp_id =[], temp_link=[];
                                for(let j=0;j<((document.getElementById('x-refine__group__8').children[0]).children.length);j++)
                                {
                                    temp_id.push(((document.getElementById('x-refine__group__8').children[0]).children[j].textContent))
                                    temp_link.push(((document.getElementById('x-refine__group__8').children[0]).children[j]).children[0].children[0].getAttribute('href'));

                                }
                                filterList.push({
                                    name: document.getElementById('x-refine__group__8').previousSibling.textContent,
                                    id: temp_id,
                                    id_link:temp_link,
                                    id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                                })
                            }
                        }
                        catch(e){console.log(e);}
                        console.log(filterList);
                    }  
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'target'){
                        let temp_id = [], temp_name= [];
                        document.getElementsByClassName('BaseButton-sc-3v3oog-0 styles__CircularBaseButton-sc-1b362wk-0 xuSzc eSGYkb')[0].click()
                        for(i=13;i <=26; i++){
                            filterList.push({
                                name: document.getElementsByClassName('h-display-flex h-flex-direction-col')[i].innerText,
                                id: [],
                                id_link:[],
                                id_child:[],
                                id_id_name: []
                            })
                        }
                        if(document.getElementsByClassName('h-display-flex h-flex-direction-col')[13])
                        {
                            document.getElementsByClassName('h-display-flex h-flex-direction-col')[13].click();

                            for(let i = 1; i<document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].children.length-1; i++){
                                temp_id.push(document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].children[i].innerText);
                            }   

                            /*filterList.push({
                                    name: temp_name[i],
                                    id: temp_id,
                                    id_link:[],
                                    id_child:[],
                                    id_id_name: []
                                })*/
                            
                        }
                        console.log(temp_name);
                        /*if(document.getElementsByClassName('h-display-flex h-flex-direction-col')[14])
                        {
                            document.getElementsByClassName('h-display-flex h-flex-direction-col')[14].click();

                            for(let i = 1; i<document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].children.length-1; i++){
                                temp_id.push(document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].children[i].innerText);
                            }   
                                filterList.push({
                                    name: document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].children[0].innerText,
                                    id: temp_id,
                                    id_link:[],
                                    id_child:[],
                                    id_id_name: []
                                })
                            
                        }*/
                    
                         
                        console.log(temp_name);
                        
                    } 
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'bestbuy'){
                        try{
                        temp_id.push(document.getElementsByClassName('facet-list-container')[0].children[1].children[1].children[0].children[0].children[1].children[0].children[1].innerText);
                        filterList.push({
                            name: document.getElementsByClassName('facet-list-container')[0].children[1].children[0].innerText,
                            id: temp_id,
                            id_link: ["https://www.bestbuy.com/site/searchpage.jsp?st="+document.getElementsByClassName('search-bar input-field')[0].children[0].value+"&qp=storepickupstores_facet%3DStore%20Availability%20-%20In%20Store%20Pickup~766"],
                            id_child:[],
                            id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                        })
                        if(document.getElementsByClassName('facet-list-container')[0].children[2].children[0].getAttribute('class')==='facet-section'){
                            filterList.push({
                                name: document.getElementsByClassName('facet-list-container')[0].children[2].children[0].children[0].children[0].children[0].innerText,
                                id: [document.getElementsByClassName('facet-list-container')[0].children[2].children[0].children[0].children[0].children[1].innerText],
                                id_link: ["https://www.bestbuy.com/site/searchpage.jsp?st="+document.getElementsByClassName('search-bar input-field')[0].children[0].value+"&qp=soldout_facet%3DAvailability~Exclude%20Out%20of%20Stock%20Items"],
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[0].getAttribute('class')){
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<4;i++){
                                temp_id_cat.push(document.getElementsByName('Category')[0].children[1].children[i].innerText);
                                temp_link.push(document.getElementsByName('Category')[0].children[1].children[i].children[0].children[0].getAttribute('href'));
                            }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('c-section-title-text')[1].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[2].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[2].children[0].children[2].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[2].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[2].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                            }
                            }
                            catch(e){console.log(e);}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[2].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[3].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<8;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[3].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[3].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                            }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[3].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[4].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[4].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[4].children[0].children[1].children[i].children[0].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[4].children[0].children[1].children[i].children[0].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                            }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[4].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[5].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[5].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[5].children[0].children[1].children[i].children[0].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[5].children[0].children[1].children[i].children[0].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                            }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[5].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[6].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[6].children[0].children[2].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[6].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[6].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                            }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[6].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[7].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[7].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[7].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[7].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[7].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[8].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[8].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[8].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[8].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[8].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[9].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[9].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[9].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[9].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[9].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[10].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[10].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[10].children[0].children[1].children[i].innerText.split('\n')[0]);
                                temp_link.push(document.getElementsByClassName('lv facet')[10].children[0].children[1].children[i].getElementsByTagName('a')[0].getAttribute('href'));
                                }
                            }
                            catch(e){console.log(e);}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[10].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[11].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[11].children[0].children[2].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[11].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[11].children[0].children[2].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[11].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[12].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[12].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[12].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[12].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[12].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[13].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=1; i<document.getElementsByClassName('lv facet')[13].children[0].children[1].children.length;i++){
                                temp_id_cat.push((document.getElementsByClassName('lv facet')[13].children[0].children[1].children.length)-i);
                                temp_link.push(document.getElementsByClassName('lv facet')[13].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[1].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){console.log(e);}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[13].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[14].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[14].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[14].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[14].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[14].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[15].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[15].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[15].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[15].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[15].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[16].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[16].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[16].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[16].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[16].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[17].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[17].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[17].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[17].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[17].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[18].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[18].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[18].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[18].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[18].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[19].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[19].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[19].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[19].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[19].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[20].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[20].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[20].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[20].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[20].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[21].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[21].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[21].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[21].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[21].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[22].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[22].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[22].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[22].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[22].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('lv facet')[23].getAttribute('class')){
                            console.log();
                            let temp_id_cat = [], temp_link=[];
                            try{
                            for(let i=0; i<document.getElementsByClassName('lv facet')[23].children[0].children[1].children.length;i++){
                                temp_id_cat.push(document.getElementsByClassName('lv facet')[23].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[0].innerText);
                                temp_link.push(document.getElementsByClassName('lv facet')[23].children[0].children[1].children[i].children[0].children[0].children[0].children[1].children[0].children[1].getAttribute('href'));
                                }
                            }
                            catch(e){}
                            filterList.push({
                                name: document.getElementsByClassName('lv facet')[23].children[0].children[0].children[0].children[0].innerText,
                                id: temp_id_cat,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                    }
                    catch(e){}
                    }         
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'costco'){
                        try{
                        if(document.getElementsByClassName('accordion panel-group')[0].children[0]){
                            let temp_id = [], temp_link = [];
                            for(let i = 0; i<document.getElementsByClassName('accordion panel-group')[0].children[0].children[1].children[0].children.length;i++){
                                temp_id.push(document.getElementsByClassName('accordion panel-group')[0].children[0].children[1].children[0].children[i].children[0].children[0].innerText.split('\n')[0]);
                                temp_link.push(document.getElementsByClassName('accordion panel-group')[0].children[0].children[1].children[0].children[i].children[0].getAttribute('href'));
                            }
                            filterList.push({
                                name: document.getElementsByClassName('accordion panel-group')[0].children[0].children[0].innerText,
                                id: temp_id,
                                id_link: temp_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('accordion panel-group')[1].children[0]){
                            let temp_1_id = [], temp_1_link = [];
                            for(let i = 0; i<document.getElementsByClassName('accordion panel-group')[0].children[1].children[1].children[0].children.length-1;i++){
                                temp_1_id.push(document.getElementsByClassName('accordion panel-group')[0].children[1].children[1].children[0].children[i].children[0].children[2].children[0].innerText);
                                temp_1_link.push(document.getElementsByClassName('accordion panel-group')[0].children[1].children[1].children[0].children[i].getAttribute('href'));
                            }
                            filterList.push({
                                name: document.getElementsByClassName('accordion panel-group')[0].children[1].children[0].children[0].children[0].innerText,
                                id: temp_1_id,
                                id_link: temp_1_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('accordion panel-group')[0].children[2]){
                            let temp_2_id = [], temp_2_link = [];
                            for(let i = 0; i<document.getElementsByClassName('accordion panel-group')[0].children[2].children[1].children[0].children.length-1;i++){
                                temp_2_id.push(document.getElementsByClassName('accordion panel-group')[0].children[2].children[1].children[0].children[i].children[0].children[2].children[0].innerText);
                                temp_2_link.push(document.getElementsByClassName('accordion panel-group')[0].children[2].children[1].children[0].children[i].getAttribute('href'));
                            }
                            filterList.push({
                                name: document.getElementsByClassName('accordion panel-group')[0].children[2].children[0].children[0].children[0].innerText,
                                id: temp_2_id,
                                id_link: temp_2_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        if(document.getElementsByClassName('accordion panel-group')[0].children[3]){
                            let temp_3_id = [], temp_3_link = [];
                            for(let i = 0; i<document.getElementsByClassName('accordion panel-group')[0].children[3].children[1].children[0].children.length-1;i++){
                                temp_3_id.push(document.getElementsByClassName('accordion panel-group')[0].children[3].children[1].children[0].children[i].children[0].children[2].children[0].innerText);
                                temp_3_link.push(document.getElementsByClassName('accordion panel-group')[0].children[3].children[1].children[0].children[i].getAttribute('href'));
                            }
                            filterList.push({
                                name: document.getElementsByClassName('accordion panel-group')[0].children[3].children[0].children[0].children[0].innerText,
                                id: temp_3_id,
                                id_link: temp_3_link,
                                id_child:[],
                                id_id_name: [(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7),(Math.random() + 1).toString(36).substring(7)]
                            })
                        }
                        }
                        catch(e){console.log(e);}
                    }      
                    for (i = 0; i < filterList.length; i++){
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
                            idLink.id = filterList[i].id_id_name[j];
                            checkbox.id = filterList[i].id_id_name[j];
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
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'target'){
                        let searchWord = (document.getElementsByClassName('Heading__StyledHeading-sc-1mp23s9-0 UABvu h-display-block h-margin-b-tiny')[0].innerText).match(/\w+|"[^"]+"/g).slice(-1)[0];
                        searchInfo.push({
                            input_id:document.getElementsByClassName('SearchInput__StyledInput-sc-i05682-0 kMtJRh')[0].getAttribute('class'),
                            input_class:document.getElementsByClassName('SearchInput__StyledInput-sc-i05682-0 kMtJRh')[0].getAttribute('class'),
                            id_search: searchWord,
                            id_search_link:'https://www.target.com/s?searchTerm='
                        });
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'bestbuy'){
                        searchInfo.push({
                            input_id:document.getElementsByClassName('search-bar input-field')[0].children[0].getAttribute('id'),
                            input_class:document.getElementsByClassName('search-bar input-field')[0].children[0].getAttribute('class'),
                            id_search: document.getElementsByClassName('search-bar input-field')[0].children[0].value,
                            id_search_link:'https://www.bestbuy.com/site/searchpage.jsp?st='
                            //searchButtonClass: (livesearchNode.childNodes[3].children[0].getElementsByTagName('input')[0]).value.getAttribute('class')
                        });
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'costco'){
                        try{
                        searchInfo.push({
                            input_id:document.getElementById('search-field').getAttribute('id'),
                            input_class:document.getElementById('search-field').getAttribute('class'),
                            id_search: document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0],
                            id_search_link:'https://www.costco.com/CatalogSearch?keyword='
                        });
                        }
                        catch(e){}
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
                            buttonNode.className = "btn btn-success";
                            
                            buttonNode.onclick = function(){
                                try{
                                let inputItem = document.getElementById('nav-search-bar-form').value;
                                if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='amazon')
                                {
                                    window.location.href = 'https://www.amazon.com/s?k='+inputItem.replace(' ','+')
                                }
                                else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='ebay'){
                                    window.location.href = 'https://www.ebay.com/sch/i.html?_nkw='+inputItem.replace(' ','+')
                                }
                                else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='target'){
                                    window.location.href = 'https://www.target.com/s?searchTerm='+inputItem.replace(' ','+')
                                }
                                else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='bestbuy'){
                                    window.location.href = 'https://www.bestbuy.com/site/searchpage.jsp?st='+inputItem.replace(' ','+')
                                }
                                else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '')==='costco'){
                                    window.location.href = 'https://www.costco.com/CatalogSearch?keyword='+inputItem.replace(' ','+')
                                }
                                }
                                catch(e){}
                            }
                            document.getElementById("searchList").appendChild(inputBox);
                            document.getElementById("searchList").appendChild(buttonNode);


                    }
                    catch(e){console.log(e);}
                }
                function sortFunction(){
                    let sortName = [],sortNumber=[],sentSortList=[];
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
                            console.log("enter");
                            let sortClass = document.getElementsByClassName('a-native-dropdown a-declarative');
                        
                        try{
                            for(let i=1; i< 10; i=i+2)
                            {
                                //console.log("https://www.amazon.com"+sortClass[0].childNodes[i].getAttribute('data-url'));
                                //console.log(sortClass[0].childNodes[i].textContent);
                                sortName.push(sortClass[0].childNodes[i].textContent);
                                sortNumber.push("https://www.amazon.com"+sortClass[0].childNodes[i].getAttribute('data-url'));
                            }
                        }
                        catch(e){}
                        console.log(sentSortList);
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
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'ebay'){
                        alert("walmart");
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'target'){
                        document.getElementsByClassName('BaseButton-sc-3v3oog-0 styles__CircularBaseButton-sc-1b362wk-0 xuSzc eSGYkb')[0].click();
                        document.getElementsByClassName('sc-gtsrHT bppWVE h-margin-l-tight')[0].click();
                        for(let i=0; i<=6; i++){
                            sortName.push(document.getElementsByClassName('styles__ContentWrapper-sc-190xyua-1 ixWUPy')[0].getElementsByClassName('h-border-b h-text-left h-padding-v-default')[i].innerText);
                            
                        }
                        /*(document.getElementsByClassName('h-position-relative')[1].children[0]).click();
                        let sortClass = document.getElementsByClassName('OptionsList-g9hycc-0 fvHfrH')[0];
                        for(let i=0; i<6; i++){
                            sortName.push(sortClass.children[i].innerText);
                           
                        }*/ 
                        let searchWord = (document.getElementsByClassName('Heading__StyledHeading-sc-1mp23s9-0 UABvu h-display-block h-margin-b-tiny')[0].innerText).match(/\w+|"[^"]+"/g).slice(-1)[0];

                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=relevance');                            
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=Featured');
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=PriceLow');
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=PriceHigh');
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=RatingHigh');
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=bestselling');
                        sortNumber.push('https://www.target.com/s?searchTerm='+searchWord+'&sortBy=newest');                
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'bestbuy'){
                        for(let i=0; i<=7; i++){
                            sortName.push(document.getElementsByClassName('tb-select-wrapper sort-dropdown')[0].children[0].children[i].innerText);
                        }
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&id=pcat17071');                            
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=-bestsellingsort%20skuidsaas');
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=%2Bcurrentprice%20skuidsaas');
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=-currentprice%20skuidsaas');
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=customerrating%20numberofreviewssaas');
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=-displaydate%20skuidsaas');
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=%2Bbrand%20skuidsaas');  
                        sortNumber.push('https://www.bestbuy.com/site/searchpage.jsp?st='+document.getElementsByClassName('search-bar input-field')[0].children[0].value+'&sp=-brand%20skuidsaas');  
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'costco'){
                        for(let i=0; i<document.getElementById('sort_by').children.length; i++){
                            sortName.push(document.getElementById('sort_by').children[i].innerText.replace(/\s/g, ''));
                        }
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=+');                            
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=item_location_pricing_salePrice+desc');
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=item_location_pricing_salePrice+asc');
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=item_ratings+desc');
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=item_startDate+desc');
                        sortNumber.push('https://www.costco.com/CatalogSearch?keyword='+document.getElementsByClassName('toolbar')[0].innerText.match(/\w+|"[^"]+"/g).slice(-1)[0]+'&sortBy=item_page_views+desc');
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
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'walmart'){
                        console.log('walmart');
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'target'){
                            // Need to work on why text nodes getting empty string
                            document.getElementsByClassName('BaseButton-sc-3v3oog-0 SelectBox__BlankButton-sc-a7khb8-4 xuSzc iwqDGe SelectBox__SelectButtonWithValidation-sc-a7khb8-5 dnkazu')[0].click();
                            console.log([0], document.getElementsByClassName('OptionsList-sc-1k3sxb6-0 GIgmJ')[0].children[0].innerText);
                            let totalSearchResult = document.getElementsByClassName('Heading__StyledHeading-sc-1mp23s9-0 UABvu h-display-block h-margin-b-tiny')[0].innerText.match(/(\d+)/)[0];
                            let pageNumber = document.getElementsByClassName('Pagination__StyledSpan-sc-1nywsxy-5 dPMkLN')[0].innerText.replace(/\D/g, '').slice(-2);
                            
                            try{
                            for(let i = 0; i<document.getElementsByClassName('Pagination__StyledSpan-sc-1nywsxy-5 dPMkLN')[0].innerText.replace(/\D/g, '').slice(-2); i++){
                                console.log([i], document.getElementsByClassName('OptionsList-sc-1k3sxb6-0 GIgmJ')[0].children[0].innerText);
                                sentPageList.push({
                                    id: document.getElementsByClassName('OptionsList-sc-1k3sxb6-0 GIgmJ')[0].children[i].children[0].children[0].children[0].textContent,
                                    id_link_page: "https://www.target.com/s?searchTerm="+(document.getElementsByClassName('Heading__StyledHeading-sc-1mp23s9-0 UABvu h-display-block h-margin-b-tiny')[0].innerText).match(/\w+|"[^"]+"/g).slice(-1)[0]+"&sortBy=Featured&Nao="+ i*Math.round(totalSearchResult/pageNumber)
                                });
                            }
                            }
                            catch(e){}
                            console.log(sentPageList);


                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'bestbuy'){
                        try{
                            for(let i = 0; i<document.getElementsByClassName('paging-list')[0].children.length; i++){
                                sentPageList.push({
                                    id: document.getElementsByClassName('paging-list')[0].children[i].children[0].innerText,
                                    id_link_page: document.getElementsByClassName('paging-list')[0].children[i].children[0].getAttribute('href')
                                });
                            }
                            }
                            catch(e){}
                    }
                    else if(document.location.hostname.match(/\w*\.\w*$/gi)[0].replace(/([.]\w+)$/, '') === 'costco'){
                        try{
                            for(let i = 1; i<document.getElementsByClassName('paging col-xs-12')[0].children[0].children.length; i++){
                                sentPageList.push({
                                    id: document.getElementsByClassName('paging col-xs-12')[0].children[0].children[i].children[0].children[1].innerText,
                                    id_link_page: document.getElementsByClassName('paging col-xs-12')[0].children[0].children[i].children[0].getAttribute('href')
                                });
                            }
                            }
                            catch(e){}
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
                alert("Already loaded");
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
            left: 30%;
       
            width: 50%;
            position: fixed;
            z-index:100;
            margin: -100px 0 0 -100px;
            overflow: auto;
        `;

        const modalContent = document.createElement('div');
        modalContent.classList.add("modal-content");
        modalContent.style.cssText = `
            all: initial;
            position: auto;
            float: left;
            padding: 20px;
            width: 100%;
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
        divcol.className = "col"; 
        const rootDiv= document.createElement('div');
        rootDiv.className = get_class_parent_node;  
              
        const searchbtn= document.createElement('div');
        searchbtn.style.cssText = `width:500px; margin:0 auto;`;        
        searchbtn.setAttribute('id', 'searchList');

        const filterbtn= document.createElement('div');
        filterbtn.style.cssText = `width:500px; margin:0 auto;`;        
        filterbtn.setAttribute('id', 'filterList');
        filterbtn.className = get_class_parent_node;

        const sortbtn= document.createElement('div');
        sortbtn.style.cssText = `width:500px; margin:0 auto;`;        
        sortbtn.setAttribute('id', 'sortList');

        const pagebtn= document.createElement('div');
        pagebtn.style.cssText = `width:500px; margin:0 auto;`;        
        pagebtn.setAttribute('id', 'pageList');
        
        const divSubmit = document.createElement('div');
        divSubmit.setAttribute('id', 'divSubmit');
        divSubmit.className = "divSubmit";

        const searchButton = document.createElement('button');
        searchButton.setAttribute('id', 'searchButton');
        searchButton.innerText = 'Search';
        searchButton.className = "btn btn-primary"
        searchButton.style.cssText = `background-color:yellow;color:blue;`;  

        const filterButton = document.createElement('button');
        filterButton.setAttribute('id', 'filterButton');
        filterButton.innerText = 'Filter';
        filterButton.className = "btn btn-primary"
        filterButton.style.cssText = `background-color:yellow;color:blue;`;  

        const sortButton = document.createElement('button');
        sortButton.setAttribute('id', 'sortButton');
        sortButton.innerText = 'Sort';
        sortButton.className = "btn btn-primary"
        sortButton.style.cssText = `background-color:yellow;color:blue;`;  

        const pageButton = document.createElement('button');
        pageButton.setAttribute('id', 'pageButton');
        pageButton.innerText = 'Page';
        pageButton.className = "btn btn-primary"
        pageButton.style.cssText = `background-color:yellow;color:blue;`;  

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