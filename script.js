document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById('registration-form');
    var feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener("submit",function(event){
        event.preventDefault();

        var username = document.getElementById('username').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var isValid = true;
        var messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push('Username can not be lass than 3 charaters');
        }

        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push('Plase enter a valid email address');
        }

        if(password.length < 8){
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        feedbackDiv.style.display='block';
        if(isValid){
            feedbackDiv.textContent="Registration successful!";
            feedbackDiv.style.color="#28a745";
        }else{
            errors = messages.join('<br>');
            feedbackDiv.innerHTML=errors;
           feedbackDiv.style.color="#dc3545"; 
        }
    })
})