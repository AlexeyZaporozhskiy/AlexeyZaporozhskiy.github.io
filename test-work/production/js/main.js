"use strict"

function validation()                                    
    { 
    var name = document.forms["Form"]["Name"];               
    var email = document.forms["Form"]["EMail"];    
    var phone = document.forms["Form"]["Telephone"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

    return true; 

    }


    
    var hiddenElement = document.getElementById("footer");
    var btn = document.querySelector('.header__button');
    
    function handleButtonClick() {
       hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    
    btn.addEventListener('click', handleButtonClick);
