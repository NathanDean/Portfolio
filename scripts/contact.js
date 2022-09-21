const form = document.querySelector("#contactForm");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let formData = {
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
            alert("Message sent");
            email.value = "";
            subject.value = "";
            message.value = "";
        } else {
            alert("Error, message not sent");
        }
    }
    xhr.send(JSON.stringify(formData));

});