

submitButton.addEventListener('click', function (event) {
    
    if(Name.value === "") {
        Name.style.borderColor = "red";
        event.preventDefault();
    } else {
        Name.style.borderColor = "initial";
    }
    
    if(Email.value === "") {
        Email.style.borderColor = "red";
        event.preventDefault();
    } else {
        Email.style.borderColor = "initial";
    }
  
});
