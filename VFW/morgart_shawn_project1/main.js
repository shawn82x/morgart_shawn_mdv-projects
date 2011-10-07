// Visual Frameworks 1110; Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
    

    //getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
   
    //Create select field element and populate with options
    function chooseGroup() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=taskGroup.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = taskGroup[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    //Find value of selected radio button.
    function getSelectedRadio(){
        var radios = document.forms[0].taskType;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                taskValue = radios[i].value;
            }
        }
    }
    
    
    function storeData() {
        var id              = Math.floor(Math.random()*1000000001);
        // Gather form field values and store in an object.
        // Object properties contain array with the form label an input value.
        getSelectedRadio();
        var item            = {};
            item.group      = ["Group", $("groups").value];
            item.what       = ["Who or What?", $("what").value];
            item.email      = ["Email:", $("email").value];
            item.phone      = ["Phone#:", $("phone").value];
            item.location   = ["Location:", $("location").value];
            item.duedate    = ["Due Date:", $("due_date").value];
            item.importance = ["Importance:", $("importance").value];
            item.notes      = ["Additional Notes:", $("notes").value];
            item.taskType   = ["Type of Task:", taskValue];


        // Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    function getData(){
        //Write Data from Local Storage to the browser.
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert the string from local storage value back to an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSublist = document.createElement('ul');
            makeli.appendChild(makeSublist);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSublist.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    }
    
    //Variable defaults
    var taskGroup = ["-- Choose A Group --", "Personal", "Family", "Work", "Volunteer"],
        taskValue;
    chooseGroup();
        
        
    //Set Link & Submit Click Events

    /*
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    var clearLink = $("clear");
    clearLink.addEventListener("click", clearLocal);
    var submit = $("submit");
    submit.addEventListener("click", storeData);
    */    
    var save = $("submit");
    save.addEventListener("click", storeData);
    
});