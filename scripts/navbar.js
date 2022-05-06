const button = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");
const headerSpan = document.querySelector("#headerContainer");
const header = document.querySelector(".header");
const main = document.querySelector("main");

button.addEventListener("click", function(){
    menu.classList.toggle("menuActive");
    button.classList.toggle("buttonActive");
    headerSpan.classList.toggle("fade");
    main.classList.toggle("fade");
})

if(window.innerWidth < 370 || window.innerHeight < 450){
    header.textContent = "nd";
}

window.addEventListener("resize", function(){
    if(window.innerWidth < 370 || window.innerHeight < 450){
        header.textContent = "nd";
    }
    else{
        header.textContent = "NATHAN DEAN";
    }
});
