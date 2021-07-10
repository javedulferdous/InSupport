

(function() {
//console.log("Hello from Filter.js");
chrome.runtime.sendMessage(null, (response) => {
    console.log(response);
  });
        var x, i;
        var fList = []
        x = document.querySelectorAll('[data-attribute="filter"]');
        for (i = 0; i < x.length; i++) {
          //x[i].style.backgroundColor = "red";
          fList.push('\n'+x[i].childNodes[1].textContent.trim())
        }
       // alert(fList)
        
       let wizards = fList;
      
        // Create an unordered list
        let list = document.createElement('ul');
      
        // Create a list item for each wizard
        // and append it to the list
        wizards.forEach(function (wizard) {
          let li = document.createElement('li');
          li.textContent = wizard;
          list.appendChild(li);
      
        });
        var pom = document.createElement('a');
        var csvContent=["1","2"]; //here we load our csv data 
        var blob = new Blob([list.textContent],{type: 'text/csv;charset=utf-8;'});
        var url = URL.createObjectURL(blob);
        pom.href = url;
        pom.setAttribute('download', 'filter.csv');
        pom.click();

        // Log
        console.log(list);
      
        // Inject into the DOM
        var DisplayList = document.getElementById("displayList");
       
        if(DisplayList)
        {
          document.getElementById("displayList").appendChild(list);
          alert(DisplayList);
        }
        console.log(DisplayList);
      
     
    })();