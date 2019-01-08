window.addEventListener("load",function() {

    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", onSubmitForm);

    var formIsValid;
    var validCheckMark = "&#10003";
    var validBorderColor = "#62f441"
    var errorBorderColor = "#f44242"

    function isValidDateFormat(dateString) {
        var regex = /^\d{2}-\d{2}-\d{4}$/;
        return test.(dateString);
    }

    function isValidEmailFormat(emailString) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailString.match(regex);
    }

    function isValidURLFormat(urlString) {
        var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        return urlString.match(regex);
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function validateRadioButtons(buttonsName, errorMsg) {
        var found = false;
        var buttons = document.getElementsByName(buttonsName);
        var errorField = document.getElementById(buttonsName + "-error");
        for(var i = 0; i !=buttons.length; i++)
            {
            var button = buttons[i];    
                if(button.checked)
                {
                found = true;               
                 break;
                }
                
            }
        if(found)
        {
               errorField.innerHTML = validCheckMark;
              errorField.style.color = validBorderColor;               
        }
        else
        {
             errorField.innerHTML = errorMsg;
            errorField.style.color = errorBorderColor;   
        }
    }

    function validateCheckBoxes(boxesName, min, max, errorMsg) {
        var boxes=document.getElementsByName(boxesName);
        var errorField= document.getElementById(boxesName + "-error");
        var count=0;
        for(var i = 0; i != boxes.length; i++)
            {
                var box = boxes[i];
                if(box.checked){count++;}   
            }
        
        if(count > min && count<= max){
          errorField.innerHTML = validCheckMark;
          errorField.style.color = validBorderColor;    
        }
        
        else{
            errorField.innerHTML = errorMsg;
            errorField.style.color = errorBorderColor;
        }
    }

    function validateMultipleSelect(selectId, min, max, errorMsg) {
        
    }

    function validateNotEmpty(inputFieldId, errorMsg) {
        var inputField = document.getElementById(inputFieldId);
        var errorField = document.getElementById(inputFieldId + "-error");
        var errorListItem = errorField.closest('li.error');

        if (inputField.value === ""){
            inputField.style.borderColor = errorBorderColor;
            errorField.innerHTML = errorMsg;
            errorField.style.color = errorBorderColor;
            formIsValid = false;
        }
        else {
            inputField.style.borderColor = validBorderColor;
            errorField.innerHTML = validCheckMark;
            errorField.style.color = validBorderColor;
        }
        if (errorListItem != null) {
            errorListItem.style.marginBottom = "0.5em";
        }
    }

 function validateEmail(inputFieldId, errorMsg) {
        var inputField = document.getElementById(inputFieldId);
        var errorField = document.getElementById(inputFieldId + "-error");
        var errorListItem = errorField.closest('li.error');

        if (isValidEmailFormat(email)){
            inputField.style.borderColor = errorBorderColor;
            errorField.innerHTML = errorMsg;
            errorField.style.color = errorBorderColor;
            formIsValid = false;
        }
        else {
            inputField.style.borderColor = validBorderColor;
            errorField.innerHTML = validCheckMark;
            errorField.style.color = validBorderColor;
        }
        if (errorListItem != null) {
            errorListItem.style.marginBottom = "0.5em";
        }
    }
    function onSubmitForm(evt){
        formIsValid = true;

        validateNotEmpty("name", "Please enter your name");
        validateNotEmpty("address", "Please enter your street address");
        validateNotEmpty("city", "Please enter your city");
        validateNotEmpty("zip-code", "Please enter your zip code");
        validateNotEmpty("email", "Please enter your email");
        validateNotEmpty("job-title", "Please enter your job title");
        validateNotEmpty("company", "Please enter your company name");
        validateNotEmpty("phone", "Please enter your phone number");
        validateCheckBoxes("skills", 3, 6, "Please select at least one skill");
        validateCheckBoxes("workshops", 1, 3, "Please select between 1-3 workshops");
        validateRadioButtons("food", "Please indicate your lunch option");

        if (!formIsValid) {
            evt.preventDefault();
        }
        else {
            evt.preventDefault();
        }
    };
})
