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

// Stores information about elements needed to build galleryItems
const galleryItemElements = [
    {
        name: "galleryItem",
        type: "div",
        styles: galleryItemStyles
    },
    {
        name: "contentWrapper",
        type: "div",
        styles: contentWrapperStyles
    },
    {
        name: "textContainer",
        type: "div",
        styles: textContainerStyles
    },
    {
        name: "title",
        type: "h2",
        styles: textStyles
    },
    {
        name: "languageHeading",
        type: "h4",
        styles: textStyles
    },
    {
        name: "gitHubLink",
        type: "a",
        styles: textStyles
    }
];

// Creates element using templates in galleryItemElements array
function createElement(type){
    const element = document.createElement(type);
    return element;
}

// Adds styles to element from relevant array
function addStyles(element, styles){
    for(let style of styles){
        element.classList.add(style);
    }
}

// Sets transform origin of gallery items
function setOrigin(element, origin){
    element.classList.add(origin)
}

// Pushes gallery item to array
function pushItem(item){
    galleryItems.push(item);
}

// Iterates through projects array and creates corresponding galleryItem for each
function createItems() {
    for(let i = projects.length - 1; i >= 0; i--){

        // Iterates through galleryItemElements array to create and style elements for each gallery item
        const elements = galleryItemElements.map(element => {
            const newElement = createElement(element.type);
            addStyles(newElement, element.styles);
            return newElement;
        });

        // Saves elements to corresponding variables
        const galleryItem = elements[0];
        const contentWrapper = elements[1];
        const textContainer = elements[2];
        const title = elements[3];
        const languageHeading = elements[4];
        const gitHubLink = elements[5];

        // Adds content to elements
        galleryItem.style.backgroundImage = `url(${projects[i].image})`;
        title.textContent = projects[i].title;
        languageHeading.textContent = projects[i].language;
        gitHubLink.setAttribute("href", projects[i].github);
        gitHubLink.innerText = "GitHub";

        // Appends elements to parents
        textContainer.append(title, languageHeading, gitHubLink);
        contentWrapper.append(textContainer);
        galleryItem.append(contentWrapper);

        // Pushes finished galleryItem to galleryItems array
        pushItem(galleryItem);
    }
}

// Creates empty item to fill space in gallery
function createEmptyItem(){
    const emptyItem = document.createElement("div");
    addStyles(emptyItem, emptyItemStyles);
    pushItem(emptyItem);
}

// Checks number of items in bottom row of gallery and sets transform-origin according to their position, then fills remaining space with empty items
function addTransformOrigin() {
    const width = window.innerWidth;
    if(width > 1400){
        // 4/4 items in row
        if(galleryItems.length % 4 === 0){
            setOrigin(galleryItems[galleryItems.length - 4], "bottomLeft");
            for(let i = 3; i > 1; i--){
                setOrigin(galleryItems[galleryItems.length - i], "bottom");
            }
            setOrigin(galleryItems[galleryItems.length - 1], "bottomRight");
        }
        // 3/4 items in row
        else if(galleryItems.length % 4 === 3) {
            setOrigin(galleryItems[galleryItems.length - 3], "bottomLeft");
            for(let i = 2; i > 0; i--){
                setOrigin(galleryItems[galleryItems.length - i], "bottom");
            }
            createEmptyItem();
        }
        // 2/4 items in row
        else if(galleryItems.length % 4 === 2) {
            setOrigin(galleryItems[galleryItems.length - 2], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 1], "bottom");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
        // 1/4 items in row
        else {
            setOrigin(galleryItems[galleryItems.length - 1], "bottomLeft");
            for(let i = 0; i < 3; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 1000){
        // 3/3 items in row
        if(galleryItems.length % 3 === 0){
            setOrigin(galleryItems[galleryItems.length - 3], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 2], "bottom");
            setOrigin(galleryItems[galleryItems.length - 1], "bottomRight");
        }
        // 2/3 items in row
        else if(galleryItems.length % 3 === 2){
            setOrigin(galleryItems[galleryItems.length - 2], "bottomLeft");
            setOrigin(galleryItems[galleryItems.length - 1], "bottom");
            createEmptyItem()
        }
        // 1/3 items in row
        else {
            setOrigin(galleryItems[galleryItems.length - 1], "bottomLeft");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 800){
        // 1/2 items in row
        if(galleryItems.length % 2 === 1){
            createEmptyItem();
        }
    }
}

// Calls functions to create, style and load galleryItems to array, before looping over array and appending each item to document
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