document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById('registration-form');
    var feedBackDiv = document.getElementById('form-feedback');

    form.addEventListener("submit",function(event){
        event.preventDefault();

        var username = document.getElementById('username').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var isValid = true;
        var message = [];

        if(username.length < 3){
            isValid = false;
            message.push('Username can not be lass than 3 charaters');
        }

        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            message.push('Plase enter a valid email address');
        }

        if(password.length < 8){
            isValid = false;
            message.push('Password must be at least 8 characters long');
        }

        feedBackDiv.style.display='block';
        if(isValid){
            feedBackDiv.textContent="Registration successful!";
            feedBackDiv.style.color="#28a745";
        }else{
            errors = '';
            for(x = 0; x < message.length; x++){
                errors = errors + message[x] + '<br>';
            }
            feedBackDiv.innerHTML=errors;
           feedBackDiv.style.color="#dc3545"; 
        }
    })
})