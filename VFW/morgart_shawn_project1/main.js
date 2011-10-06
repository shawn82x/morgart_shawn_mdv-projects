// Visual Frameworks 1110; Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
    

    //getElementById Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    };
        
        
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
    
    function storeData() {
        var id              = Math.floor(Math.random()*1000000001);
        // Gather form field values and store in an object.
        // Object properties contain array with the form label an input value.
        var item            = {};
            item.group      = ["Group", $("groups").value];
            item.what       = ["Who or What?", $("what").value];
            item.phone      = ["Phone#:", $("phone").value];
            item.location   = ["Location:", $("location").value];
            item.duedate    = ["Due Date:", $("dueDate").value];
            item.importance = ["Importance:", $("importance").value];
            item.notes      = ["Additional Notes:", $("notes").value];
/*            item.taskType   = ["Type of Task:", $("taskType")]                */


        // Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, item)
    }
    //Variable defaults
    var taskGroup = ["-- Choose A Group --", "Personal", "Family", "Work", "Volunteer"];
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