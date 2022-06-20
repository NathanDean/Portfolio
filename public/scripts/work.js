// Imports array of projects to be added to gallery
import projects from "./projects.js";

// Selects gallery
const gallery = document.querySelector("#gallery");

// Stores items to be added to gallery
let galleryItems = [];

// Stores styles for galleryItem
const galleryItemStyles = [
    "gallerySquare",
    "galleryContentItem",
    "flex",
    "center",
    "alignCenter",
    "contentCenter",
    "wrap"
];

// Stores styles for emptyItem
const emptyItemStyles = [
    "gallerySquare",
    "invisible"
];

// Stores styles for contentWrapper
const contentWrapperStyles = [
    "galleryItemContentWrapper",
    "flex",
    "alignCenter",
    "full",
    "fullHeight"
];

// Stores styles for textContainer
const textContainerStyles = [
    "galleryItemTextContainer",
    "flex",
    "wrap",
    "around",
    "contentAround",
    "full",
    "halfHeight",
    "transparent",
    "centerText"
];

// Stores styles for text elements
const textStyles = [
    "full"
];

// Adds styles to element from relevant array
function addStyles(element, styles){
    for(let style of styles){
        element.classList.add(style);
    }
}

// Creates + styles galleryItem
function createGalleryItem(){
    const galleryItem = document.createElement("div");    
    addStyles(galleryItem, galleryItemStyles);
    return galleryItem;
}

// Creates + styles contentWrapper
function createContentWrapper(){
    const contentWrapper = document.createElement("div");
    addStyles(contentWrapper, contentWrapperStyles);
    return contentWrapper;
}

// Creates + styles textContainer
function createTextContainer(){
    const textContainer  = document.createElement("div");
    addStyles(textContainer, textContainerStyles);
    return textContainer;
}

// Creates + styles title
function createTitle(){
    const title = document.createElement("h2");
    addStyles(title, textStyles);
    return title;
}

// Creates + styles languageHeading
function createLanguageHeading(){
    const languageHeading = document.createElement("h4");
    addStyles(languageHeading, textStyles);
    return languageHeading;
}

// Creates + styles gitHubLink
function createGitHubLink(){
    const gitHubLink = document.createElement("a");
    addStyles(gitHubLink, textStyles);
    gitHubLink.innerText = "GitHub";
    return gitHubLink;
}

// Sets transform origin of gallery items
function setOrigin(element, origin){
    element.classList.add(origin)
}

// Pushes gallery item to array
function pushItem(item){
    galleryItems.push(item);
};

// Creates empty item to fill space in gallery
function createEmptyItem(){
    const emptyItem = document.createElement("div");
    addStyles(emptyItem, emptyItemStyles)
    pushItem(emptyItem);
}

// Creates and styles gallery items + content (planning to refactor into separate functions)
function createItems() {
    for(let i = projects.length - 1; i >= 0; i--){
        
        // Creates + styles galleryItem and descendent elements
        const galleryItem = createGalleryItem();
        const contentWrapper = createContentWrapper();
        const textContainer = createTextContainer();
        const title = createTitle();
        const languageHeading = createLanguageHeading();
        const gitHubLink = createGitHubLink();

        // Adds content to elements
        galleryItem.style.backgroundImage = `url(${projects[i].image})`;
        title.textContent = projects[i].title;
        languageHeading.textContent = projects[i].language;
        gitHubLink.setAttribute("href", projects[i].github);

        // Appends elements to parents
        textContainer.append(title, languageHeading, gitHubLink);
        contentWrapper.append(textContainer);
        galleryItem.append(contentWrapper);

        // Pushes finished galleryItem to galleryItems array
        pushItem(galleryItem);
    }
}

// Checks number of items in bottom row of gallery and sets transform-origin according to their position, then fills remaining space with empty items
function addTransformOrigin() {
    const width = window.innerWidth;
    if(width > 1400){
        if(galleryItems.length % 4 === 0){
            setOrigin(galleryItems[galleryItems.length - 4], "bottomLeft");
            for(let i = 3; i > 1; i--){
                setOrigin(galleryItems[galleryItems.length - i], "bottom");
            }
            setOrigin(galleryItems[galleryItems.length - 1], "bottomRight");
        }
        else if(galleryItems.length % 4 === 3) {
            setOrigin(galleryItems[galleryItems.length - 3], "bottomLeft");
            for(let i = 2; i > 0; i--){
                setOrigin(galleryItems[galleryItems.length - i], "bottom");
            }
            createEmptyItem();
        }
        else if(galleryItems.length % 4 === 2) {
            setOrigin(galleryItems[galleryItems.length - 2], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 1], "bottom");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
        else {
            setOrigin(galleryItems[galleryItems.length - 1], "bottomLeft");
            for(let i = 0; i < 3; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 1000){
        if(galleryItems.length % 3 === 0){
            setOrigin(galleryItems[galleryItems.length - 3], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 2], "bottom");
            setOrigin(galleryItems[galleryItems.length - 1], "bottomRight");
        }
        else if(galleryItems.length % 3 === 2){
            setOrigin(galleryItems[galleryItems.length - 2], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 1], "bottom");
            createEmptyItem()
        }
        else {
            setOrigin(galleryItems[galleryItems.length - 1], "bottomLeft");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 800){
        if(galleryItems.length % 2 === 1){
            createEmptyItem();
        }
    }
}

// Calls functions to create and style gallery items, then loads them to array, before looping over array and appending each item to document
function loadItems() {
    createItems();
    addTransformOrigin();
    for(let item of galleryItems) {
        gallery.append(item);
    }
}

// Removes gallery items from document and clears galleryItems array
function clearItems() {
    for(let item of galleryItems) {
        gallery.removeChild(item);
    }
    galleryItems = [];
}

// Calls function to load gallery items on page load
loadItems();

// Calls functions to clear and reload gallery items on resize
window.addEventListener("resize", clearItems);
window.addEventListener("resize", loadItems);