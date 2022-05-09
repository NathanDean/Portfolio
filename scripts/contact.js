const form = document.querySelector("form");

function sendMail(mail){
    fetch("https://nathandean.co.uk/contact.html", {
        method:"POST",
        body: mail
    }).then(function(response){
        return response.json();
    })
}

const formEvent = form.addEventListener("submit", function(event){
    event.preventDefault();
});

let mail = new FormData(form);

sendMail(mail);