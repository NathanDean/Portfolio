// Imports array of projects to be added to gallery
import projects from "./projects.js";

// Selects gallery
const gallery = document.querySelector("#gallery");

// Stores items to be added to gallery
let galleryItems = [];

const styles = {
    galleryItem: [
        "gallerySquare",
        "galleryContentItem",
        "flex",
        "center",
        "alignCenter",
        "contentCenter",
        "wrap"
    ],
    contentWrapper: [
        "galleryItemContentWrapper",
        "flex",
        "alignCenter",
        "full",
        "fullHeight"
    ],
    textContainer: [
        "galleryItemTextContainer",
        "flex",
        "wrap",
        "start",
        "contentAround",
        "full",
        "halfHeight",
        "transparent",
        "centerText"
    ],
    linkContainer: [
        "linkContainer",
        "flex",
        "wrap",
        "full",
        "center"
    ],
    text: [
        "full"
    ],
    galleryLink: [
        "galleryLink",
        "full"
    ],
    emptyItem: [
        "gallerySquare",
        "invisible"
    ]
};

// Templates for elements needed to build items in gallery
const galleryItemElements = {
    galleryItem: {
        type: "div",
        styles: styles.galleryItem
    },
    contentWrapper: {
        type: "div",
        styles: styles.contentWrapper
    },
    textContainer: {
        type: "div",
        styles: styles.textContainer
    },
    title: {
        type: "h2",
        styles: styles.text
    },
    languageHeading: {
        type: "h4",
        styles: styles.text
    },
    linkContainer: {
        type: "div",
        styles: styles.linkContainer
    },
    appLink: {
        type: "a",
        styles: styles.galleryLink
    },
    gitHubLink: {
        type: "a",
        styles: styles.galleryLink
    }
};

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

        // Stores elements needed to build galleryItem
        const elements = [];
        
        // Iterates through galleryItemElements array to create and style elements, then pushes to elements array
        for(let key of Object.keys(galleryItemElements)){
            const newElement = createElement(galleryItemElements[key].type);
            addStyles(newElement, galleryItemElements[key].styles)
            elements.push(newElement);
        }

        // Saves elements to corresponding variables
        const galleryItem = elements[0];
        const contentWrapper = elements[1];
        const textContainer = elements[2];
        const title = elements[3];
        const languageHeading = elements[4];
        const linkContainer = elements[5]
        const appLink = elements[6];
        const gitHubLink = elements[7];

        // Adds content to elements
        galleryItem.style.backgroundImage = `url(${projects[i].image})`;
        title.textContent = projects[i].title;
        languageHeading.textContent = projects[i].language;
        if (projects[i].appLink) {
            appLink.setAttribute("href", projects[i].appLink)
        }
        gitHubLink.setAttribute("href", projects[i].github);
        gitHubLink.innerText = "GitHub";
        if(appLink.href !== ""){
            linkContainer.innerHTML = `<a href = "${appLink}">View app</a> | <a href = "${gitHubLink}">GitHub</a>`
        } else {
            linkContainer.innerHTML = `<a href = "${gitHubLink}">GitHub</a>`
        }
        

        // Appends elements to parents
        textContainer.append(title, languageHeading, linkContainer);
        contentWrapper.append(textContainer);
        galleryItem.append(contentWrapper);

        // Pushes finished galleryItem to galleryItems array
        pushItem(galleryItem);
    }
}

// Creates empty item to fill space in gallery
function createEmptyItem(){
    const emptyItem = document.createElement("div");
    addStyles(emptyItem, styles.emptyItem);
    pushItem(emptyItem);
}

// Checks number of items in bottom row of gallery and sets transform-origin according to their position, then fills remaining space with empty items
function addTransformOrigin() {

    const width = window.innerWidth;    
    const numOfGalleryItems = galleryItems.length;

    if(width > 1400){
        
        // 4/4 items in row
        if(numOfGalleryItems % 4 === 0){
            setOrigin(galleryItems[numOfGalleryItems - 4], "bottomLeft");
            for(let i = 3; i > 1; i--){
                setOrigin(galleryItems[numOfGalleryItems - i], "bottom");
            }
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottomRight");
        }
        // 3/4 items in row
        else if(numOfGalleryItems % 4 === 3) {
            setOrigin(galleryItems[numOfGalleryItems - 3], "bottomLeft");
            for(let i = 2; i > 0; i--){
                setOrigin(galleryItems[numOfGalleryItems - i], "bottom");
            }
            createEmptyItem();
        }
        // 2/4 items in row
        else if(numOfGalleryItems % 4 === 2) {
            setOrigin(galleryItems[numOfGalleryItems - 2], "bottomLeft");
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottom");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
        // 1/4 items in row
        else {
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottomLeft");
            for(let i = 0; i < 3; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 1000){
        // 3/3 items in row
        if(numOfGalleryItems % 3 === 0){
            setOrigin(galleryItems[numOfGalleryItems - 3], "bottomLeft");
            setOrigin(galleryItems[numOfGalleryItems - 2], "bottom");
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottomRight");
        }
        // 2/3 items in row
        else if(numOfGalleryItems % 3 === 2){
            setOrigin(galleryItems[numOfGalleryItems - 2], "bottomLeft");
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottom");
            createEmptyItem()
        }
        // 1/3 items in row
        else {
            setOrigin(galleryItems[numOfGalleryItems - 1], "bottomLeft");
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 800){
        // 1/2 items in row
        if(numOfGalleryItems % 2 === 1){
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