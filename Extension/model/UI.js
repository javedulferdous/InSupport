class UI {
    static modalMenu(){
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            top: 250px;
            left: 300px;
            right: 300px;
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
        submitButton.setAttribute("id","submitBtn");
        submitButton.className = "btn btn-info";
        submitButton.setAttribute("value","Submit");
        submitButton.innerHTML = "Submit";
        
        const divrow= document.createElement('div');
        divrow.className = "row";  
        const divcol= document.createElement('div');
        divcol.className = "col-sm";  
              
        const searchbtn= document.createElement('div');
        searchbtn.style.cssText = `width:800px; margin:0 auto;`;        
        searchbtn.setAttribute('id', 'searchList');

        const filterbtn= document.createElement('div');
        filterbtn.style.cssText = `width:800px; margin:0 auto;`;        
        filterbtn.setAttribute('id', 'filterList');

        const sortbtn= document.createElement('div');
        sortbtn.style.cssText = `width:800px; margin:0 auto;`;        
        sortbtn.setAttribute('id', 'sortList');

        const pagebtn= document.createElement('div');
        pagebtn.style.cssText = `width:800px; margin:0 auto;`;        
        pagebtn.setAttribute('id', 'pageList');

        const divSubmit = document.createElement('div');
        divSubmit.style.cssText = `width:800px; position:center; margin:0 auto;`;        
        divSubmit.setAttribute('id', 'divSubmit');
        divSubmit.className = "text-center";

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

        modalContent.appendChild(searchButton);
        modalContent.appendChild(filterButton);
        modalContent.appendChild(sortButton);
        modalContent.appendChild(pageButton);
        let nodeBreak = document.createElement('br');

        modalContent.appendChild(closeButton);

        divcol.appendChild(sortbtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);

        divcol.appendChild(filterbtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);
        
        divcol.appendChild(pagebtn);
        divrow.appendChild(divcol);
        modalContent.appendChild(divrow);

        modal.appendChild(modalContent);
        divSubmit.appendChild(submitButton);
        modalContent.appendChild(divSubmit);

        return modal;
    }
    //#endregion

    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }

}