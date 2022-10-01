const about = document.querySelector("#about");
const subheading = document.querySelector("#indexTitle h3");
const aboutText = document.querySelector("#aboutTextContainer")

const toggleAbout = () => {
    
    subheading.classList.toggle("noHeight");
    subheading.classList.toggle("maxHeight");
    setTimeout(() => {
        aboutText.classList.toggle("noHeight");
        aboutText.classList.toggle("maxHeight");
    }, 1500)
    
    
}

about.addEventListener("click", toggleAbout);