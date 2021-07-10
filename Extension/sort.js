function sortFunction() {
    // https://www.w3schools.com/jsref/prop_style_color.asp
    /*
    
    var sortElement = document.querySelectorAll('form[data-attribute="sort"]')[0];
    if (sortElement ==null) {
        console.log("Null value")
    }
    else {
         alert(sortElement.textContent);
    }*/
    var x, i;
    var sortList = []
   x = document.querySelectorAll('[data-attribute="sort"]');
   for (i = 0; i < x.length; i++) {
     x[i].style.backgroundColor = "blue";
     sortList.push('\n'+x[i].childNodes[1].textContent.trim())
   }
   let wizards = sortList;

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
   var blob = new Blob([list.textContent],{type: 'text/csv;charset=utf-8;'});
   var url = URL.createObjectURL(blob);
   pom.href = url;
   pom.setAttribute('download', 'sort.csv');
   pom.click();
   // Log
   console.log(list);
 
   // Inject into the DOM
   let DisplayList = document.getElementById("[id='displayList']");
   console.log(DisplayList)
   if (DisplayList) {
     DisplayList.appendChild(list);
   }
}

sortFunction();