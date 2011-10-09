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
    function getRadioRepstyle(){
        var radios = document.forms[0].repStyle;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                repStyleValue = radios[i].value;
            }
        }
    }
    
    function getRadioChannel(){
        var radios = document.forms[0].channel;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                channelValue = radios[i].value;
            }
        }
    }
    
    function getRadioConvincer(){
        var radios = document.forms[0].convincer;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                convincerValue = radios[i].value;
            }
        }
    }
    
    function getRadioSocialstyle(){
        var radios = document.forms[0].socialstyle;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                socialstyleValue = radios[i].value;
            }
        }
    }
    
   function toggleControls(n){
        switch(n){
            case "on":
                $('contactForm').style.display = "none";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "none";
                $('addNew').style.display = "inline";
                break;
            case "off":
                $('contactForm').style.display = "block";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "inline";
                $('addNew').style.display = "none";
                $('items').style.display = "none";
                break;
            default:
                return false;
        }
    }

    function storeData() {
        var id              = Math.floor(Math.random()*1000000001);
        // Gather form field values and store in an object.
        // Object properties contain array with the form label an input value.
        getRadioRepstyle();
        getRadioChannel();
        getRadioConvincer();
        getRadioSocialstyle();
        
        var item            = {};
            item.fname      = ["First Name:", $("fname").value];
            item.lname      = ["Last Name:", $("lname").value];
            item.street     = ["Street:", $("street").value];
            item.city       = ["City:", $("city").value];
            item.state      = ["State:", $("state").value];
            item.zip        = ["Zip:", $("zip").value];
            item.phone      = ["Phone:", $("phone").value];
            item.email      = ["Email:", $("email").value];
            item.taskType   = ["Preferred Method of Contact:", taskGroup];
            item.direction  = ["Direction: toward vs. away:", $("direction").value];
            item.source     = ["Source: internal vs. external:", $("source").value];
            item.reason     = ["Reason: options vs. procedures:", $("reason").value];
            item.level      = ["Level: proactive vs. reactive:", $("level").value];
            item.scope      = ["Scope big-picture vs. details:", $("scope").value];
            item.change     = ["Change sameness vs. difference:", $("change").value];
            item.theor      = ["Theoretical:", $("theor").value];
            item.util       = ["Utilitarian:", $("util").value];
            item.aesth      = ["Aesthetic:", $("aesth").value];
            item.soci       = ["Social:", $("soci").value];
            item.indiv      = ["Individualistic:", $("indiv").value];
            item.trad       = ["Traditional:", $("trad").value];
            item.dom        = ["Dominance:", $("dom").value];
            item.inf        = ["Influencing:", $("inf").value];
            item.stead      = ["Steadiness:", $("stead").value];
            item.comp       = ["Compliance:", $("comp").value];
            item.rep        = ["Representational Style:", repStyleValue];
            item.chan       = ["Channel:", channelValue];
            item.conv       = ["Convincer:", convincerValue];
            item.soci       = ["Social Style:", socialstyleValue];

        // Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            alert("There is no data in Local Storage.");
        }
        //Write Data from Local Storage to the browser.
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert the string from local storage value back to an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    }
    
    function clearLocal(){
        if(localStorage.length === 0){
            alert("There is no data to clear.")
        }else{
            localStorage.clear();
            alert("All contacts are deleted!");
            window.location.reload();
            return false;
        }
    }
    
    //Variable defaults
    var taskGroup = ["-- Choose --", "Email", "Phone-Home", "Phone-Mobile", "Phone-Office"],
        taskType;

    chooseGroup();
    
        
        
    //Set Link & Submit Click Events

    
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    
    var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearLocal);
    
    var submit = $("submit");
    submit.addEventListener("click", storeData);
      
    var save = $("submit");
    save.addEventListener("click", storeData);
    
});
       