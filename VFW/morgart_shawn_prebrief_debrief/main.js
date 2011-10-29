// Mobile Interfaces and Usability 1111; Project 2

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
/*    
    function getRadioChannel(){
        var radios2 = document.forms[0].channel;
        for (var i=0; i<radios2.length; i++){
            if(radios2[i].checked){
                channelValue = radios2[i].value;
            }
        }
    }
    
    function getRadioConvincer(){
        var radios3 = document.forms[0].convincer;
        for (var i=0; i<radios3.length; i++){
            if(radios3[i].checked){
                convincerValue = radios3[i].value;
            }
        }
    }
    
    function getRadioSocialstyle(){
        var radios4 = document.forms[0].socialstyle;
        for (var i=0; i<radios4.length; i++){
            if(radios4[i].checked){
                socialstyleValue = radios4[i].value;
            }
        }
    }
*/    
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

    function storeData(key) {
        // If there is no key, this means this is a brand new item and we need a  new key.
        if (!key){
            var id          = Math.floor(Math.random()*1000000001);
        }else{
        //Set the id to the existing key we're editing so that it will save over the data.
        //This is the same key passed from the editSubmit event handler...
        //to the validate function, then passed here, into the storeData function.
            id = key;
        }

        // Gather form field values and store in an object.
        // Object properties contain array with the form label an input value.
        getRadioRepstyle();
//        getRadioChannel();
//        getRadioConvincer();
//        getRadioSocialstyle();
        
        var item            = {};
            item.groups     = ["Type of Account:", $("groups").value];
            item.fname      = ["First Name:", $("fname").value];
            item.lname      = ["Last Name:", $("lname").value];
            item.street     = ["Street:", $("street").value];
            item.city       = ["City:", $("city").value];
            item.state      = ["State:", $("state").value];
            item.zip        = ["Zip:", $("zip").value];
            item.phone      = ["Phone:", $("phone").value];
            item.email      = ["Email:", $("email").value];
            item.lineBreak  = [" ", lineBreak];
            item.rep        = ["Representational Style:", repStyleValue];
            item.lineBreak2 = [" ", lineBreak];
            item.direction  = ["Direction: toward vs. away:", $("direction").value];
            item.source     = ["Source: internal vs. external:", $("source").value];
            item.reason     = ["Reason: options vs. procedures:", $("reason").value];
            item.level      = ["Level: proactive vs. reactive:", $("level").value];
            item.scope      = ["Scope big-picture vs. details:", $("scope").value];
            item.change     = ["Change sameness vs. difference:", $("change").value];
            item.lineBreak3 = [" ", lineBreak];
//            item.chan       = ["Channel:", channelValue];
//            item.conv       = ["Convincer:", convincerValue];
//            item.lineBreak4 = [" ", lineBreak];
            item.theor      = ["Theoretical:", $("theor").value];
            item.util       = ["Utilitarian:", $("util").value];
            item.aesth      = ["Aesthetic:", $("aesth").value];
            item.soci       = ["Social:", $("soci").value];
            item.indiv      = ["Individualistic:", $("indiv").value];
            item.trad       = ["Traditional:", $("trad").value];
            item.lineBreak5 = [" ", lineBreak];
//            item.social     = ["Social Style:", socialstyleValue];
//            item.lineBreak6 = [" ", lineBreak];
            item.dom        = ["Dominance:", $("dom").value];
            item.inf        = ["Influencing:", $("inf").value];
            item.stead      = ["Steadiness:", $("stead").value];
            item.comp       = ["Compliance:", $("comp").value];
            
        // Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    function autoFillData(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            autoFillData;
            alert("There is no data stored in this Category. Default data has been added.");
            
        }
        
        //Write Data from Local Storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement('li');
            var linksLi = document.createElement("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert the string from local storage value back to an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.group[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi);     //Create edit and delete buttons/link for each item in local storage.
        }
    }
    
    // Get the image for the correct category
    function getImage(catName, makeSubList){
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImg = document.createElement('img');
        var setSrc = newImg.setAttribute("src", "images/"+ catName + ".png");
        imageLi.appendChild(newImg);
    }
    
    
    //Make Item Links... create the edit and delet links for each stored item.
    function makeItemLinks(key, linksLi){
        //add edit single item link
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Client";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        //add line-break
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
     
        //add delete item link
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Client";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }
    
    function editItem(){
        //Grab the data from our item from Local Storage.
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        // Show the form
        toggleControls("off");
        
        //populate the form fields with current localStorage values.
        $("groups").value   = item.group[1];
        $("fname").value    = item.fname[1];
        $("lname").value    = item.lname[1];
        $("street").value   = item.street[1];
        $("city").value     = item.city[1];
        $("state").value    = item.state[1];
        $("zip").value      = item.zip[1];
        $("phone").value    = item.phone[1];
        $("email").value    = item.email[1];
        
//      Radio buttons regarding "Representational Style"
        var radios1 = document.forms[0].repStyle;
        for(var i=0; i<radios1.length; i++){
            if(radios1[i].value == "auditory" && item.rep[1] == "auditory"){
                radios1[i].setAttribute("checked", "checked");
            }else if(radios1[i].value == "visual" && item.rep[1] == "visual"){
                radios1[i].setAttribute("checked", "checked");
            }else if(radios1[i].value == "kines" && item.rep[1] == "kines"){
                radios1[i].setAttribute("checked", "checked");
            }
        };
        
        $("direction").value    = item.direction[1];
        $("source").value       = item.source[1];
        $("reason").value       = item.reason[1];
        $("level").value        = item.level[1];
        $("scope").value        = item.scope[1];
        $("change").value       = item.change[1];

//      Radio buttons regarding "Channel"
/*        var radios2 = document.forms[0].channel;
        for(var i=0; i<radios2.length; i++){
            if(radios2[i].value == "see" && item.channel[1] == "see"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "hear" && item.channel[1] == "hear"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "read" && item.channel[1] == "read"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "do" && item.channel[1] == "do"){
                radios2[i].setAttribute("checked", "checked");
            }
        };
        
//      Radio buttons regarding "Convincers"
        var radios3 = document.forms[0].convincer;
        for(var i=0; i<radios3.length; i++){
            if(radios3[i].value == "overtime" && item.convincer[1] == "overtime"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "repetition" && item.convincer[1] == "repetition"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "automatic" && item.convincer[1] == "automatic"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "consistent" && item.convincer[1] == "consistent"){
                    radios3[i].setAttribute("checked", "checked");
            }
        };
*/

        $("theor").value        = item.theor[1];
        $("util").value         = item.util[1];
        $("aesth").value        = item.aesth[1];
        $("soci").value         = item.soci[1];
        $("indiv").value        = item.indiv[1];
        $("trad").value         = item.trad[1];


//      Radio buttons regarding "Social Style"
/*        var radios4 = document.forms[0].socialstyle;
        for(var i=0; i<radios4.length; i++){
            if(radios4[i].value == "driver" && item.socialstyle[1] == "driver"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "expressive" && item.socialstyle[1] == "expressive"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "amiable" && item.socialstyle[1] == "amiable"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "analytical" && item.socialstyle[1] == "analytical"){
                radios4[i].setAttribute("checked", "checked");
            }
        };
*/

        $("dom").value          = item.dom[1];
        $("inf").value          = item.inf[1];
        $("stead").value        = item.stead[1];
        $("comp").value         = item.comp[1];
       
        // Remove the initial listener from the input "save contact" button.
        save.removeEventListener("click", storeData);
        //Change Submit Button Value to Edit Button
        $('submit').value = "Edit Client";
        var editSubmit = $('submit');
        //Save the key value established in this function as a property of the editSubmit event
        //so we can use that value when we save the data we edited.
        editSubmit.key = this.key;
        editSubmit.addEventListener("click", validate);
        
    }
    
    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this contact?");
        if (ask){
            localStorage.removeItem(this.key);
            window.location.reload();
        }else{
            alert("Contact was NOT deleted.")
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
    
    function validate(e){
        //Define the elements I want to check
        var getGroup    = $("groups");
        var getFname    = $("fname");
        var getLname    = $("lname");
        var getStreet   = $("street");
        var getCity     = $("city");
        var getPhone    = $("phone");
        var getEmail    = $("email");
        
        //reset error messages.
        errMsg.innerHTML = "";
            getGroup.style.border   = "1px solid black";
            getFname.style.border   = "1px solid black";
            getLname.style.border   = "1px solid black";
            getStreet.style.border  = "1px solid black";
            getCity.style.border    = "1px solid black";
            getPhone.style.border   = "1px solid black";
            getEmail.style.border   = "1px solid black";

        
        //Get Error messages
        var messageAry = [ ];
        // Group validation
        if(getGroup.value === "-- Choose --"){
            var groupError = "Please choose an Account Type!";
            getGroup.style.border = "1px solid red";
            messageAry.push(groupError);
        }
        
        // First Name validation
        if(getFname.value === ""){
            var fNameError = "Please enter a first name!";
            getFname.style.border = "1px solid red";
            messageAry.push(fNameError);
        }
        
        // Last name validation
        if(getLname.value === ""){
            var lNameError = "Please enter a Last name!";
            getLname.style.border = "1px solid red";
            messageAry.push(lNameError);
        }
        
        // Street validation
        if(getStreet.value === ""){
            var streetError = "Please enter a Street!";
            getStreet.style.border = "1px solid red";
            messageAry.push(streetError);
        }
        
        // City validation
        if(getCity.value === ""){
            var cityError = "Please enter a City!";
            getCity.style.border = "1px solid red";
            messageAry.push(cityError);
        }
        
        // Phone validation
        if(getPhone.value === ""){
            var phoneError = "Please enter a Phone number!";
            getPhone.style.border = "1px solid red";
            messageAry.push(phoneError);
        }
        
        // Email validation
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!(re.exec(getEmail.value))){
            var emailError = "Please enter a valid email address!";
            getEmail.style.border = "1px solid red";
            messageAry.push(emailError);
        }
        
        //If there were errors, display them on the screen.
        if(messageAry.length >= 1){
            for(var i=0, j=messageAry.length; i<j; i++){
                var txt = document.createElement('li');
                txt.innerHTML = messageAry[i];
                errMsg.appendChild(txt);
            }
            
            e.preventDefault();
            return false;
            
        }else{
            //If all is OK, save our data! Send the key value (that came from the edit function)
            //Remember this key value was passed through the editSubmit eventListener...
            storeData(this.key);
        }
      
    }
    
    
    
    
    //Variable defaults
    var taskGroup = ["-- Choose --", "Residential", "Commercial", "Medical", "Fire", "Takeover", "Upgrade", ];
     //   taskType;
    var lineBreak = "----------------------------------------";
    chooseGroup();
    errMsg = $('errors');
        
        
    //Set Link & Submit Click Events
    var displayResi = $("displayResi");
    displayResi.addEventListener("click", getData);
    
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    
    var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearLocal);
      
    var save = $("submit");
    save.addEventListener("click", validate);
    
    
     // JSON Object which will auto populate local storage.
     
/*    function autoFillData(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }
*/    
    function autoFillCom(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Commercial"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Commercial"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Commercial"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Commercial"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }
    
    function autoFillMedi(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Medical"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Medical"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Medical"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Medical"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }
    
    function autoFillFire(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Fire"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Fire"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Fire"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Fire"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }
    
    
    function autoFillUpgrade(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Upgrade"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            
            "testClient2": {
                "group":    ["Group:", "Upgrade"],
                "fname":    ["First Name:", "Jane"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jane@gmail.com"]
            },
            
            "testClient3": {
                "group":    ["Group:", "Upgrade"],
                "fname":    ["First Name:", "Jack"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "4562 E. North St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "jack@gmail.com"]
            },
            
            "testClient4": {
                "group":    ["Group:", "Upgrade"],
                "fname":    ["First Name:", "Joe"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "9372 E. High St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "joe@doe.com"]
            },
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }

    }

});
       