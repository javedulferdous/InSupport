function pageFucn() {
    var x, i;
    var pageList = []
    x = document.querySelectorAll('div[data-attribute="page"]');
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "black";
      pageList.push('\n'+x[i].textContent.trim())
    }
    let wizards = pageList;

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
    pom.setAttribute('download', 'page.csv');
    pom.click();
    // Log
    console.log(list);
  
    // Inject into the DOM
    let DisplayList = document.getElementById("[id='displayList']");
   
    if (DisplayList) {
      DisplayList.appendChild(list);
      console.log(DisplayList)
    }
  }
  pageFucn();