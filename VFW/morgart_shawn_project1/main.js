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
        };
        selectLi.appendChild(makeSelect);
    };
    //Variable defaults
    var taskGroup = ["-- Choose A Group --", "Personal", "Family", "Work", "Volunteer"];
    chooseGroup();
        
        
    //Set Link & Submit Click Events
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    var clearLink = $("clear");
    clearLink.addEventListener("click", clearLocal);
    var submit = $("submit");
    submit.addEventListener("click", storeData);
    
});