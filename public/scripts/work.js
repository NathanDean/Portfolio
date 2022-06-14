// Imports array of projects to be added to gallery
import projects from "./projects.js";

// Selects gallery
const gallery = document.querySelector("#gallery");


// Stores items to be added to gallery
let galleryItems = [];

// Creates new gallery item
function createItem() {
    const item = document.createElement("div");    
    return item;
}

// Set size of gallery items
function gallerySquare(item){
    item.classList.add("gallerySquare");
};

// Set transform origin of gallery items
function bottomLeft(item){
    item.classList.add("bottomLeft");
};
function bottom(item){
    item.classList.add("bottom");
};
function bottomRight(item){
    item.classList.add("bottomRight");
};

// Make filler items invisible
function invisible(item){
    item.classList.add("invisible");
};

// Pushes gallery item to array
function pushItem(item){
    galleryItems.push(item);
};

// Creates empty item to fill space in gallery
function createEmptyItem(){
    const emptyItem = createItem();
    gallerySquare(emptyItem);
    invisible(emptyItem);
    pushItem(emptyItem);
}

// Creates and styles gallery items + content (planning to refactor into separate functions)
function createItems() {
    for(let i = projects.length - 1; i >= 0; i--){
        
        // Creates + styles div
        const galleryItem = createItem();

        gallerySquare(galleryItem);
        galleryItem.classList.add("galleryContentItem");
        galleryItem.classList.add("flex");
        galleryItem.classList.add("center");
        galleryItem.classList.add("alignCenter");
        galleryItem.classList.add("contentCenter");
        galleryItem.classList.add("wrap");
        galleryItem.style.backgroundImage = `url(${projects[i].image})`;
        galleryItems.push(galleryItem);
        
        // Creates + styles gallery item title
        const itemTitle = document.createElement("h2");
        itemTitle.classList.add("full");
        itemTitle.classList.add("transparent");
        itemTitle.classList.add("centerText");
        itemTitle.textContent = projects[i].title;

        // Creates + styles language subheading
        const itemLanguage = document.createElement("h4");
        itemLanguage.classList.add("full");
        itemLanguage.classList.add("transparent");
        itemLanguage.classList.add("centerText");
        itemLanguage.textContent = projects[i].language;

        // Creates + styles GitHub link
        const itemGitHubLink = document.createElement("a");
        itemGitHubLink.setAttribute("href", projects[i].github);
        itemGitHubLink.innerText = "GitHub";
        itemGitHubLink.classList.add("full");
        itemGitHubLink.classList.add("transparent");
        itemGitHubLink.classList.add("centerText");

        // Creates + styles text container div
        const galleryItemTextContainer = document.createElement("div");
        galleryItemTextContainer.classList.add("galleryItemTextContainer");
        galleryItemTextContainer.classList.add("flex");
        galleryItemTextContainer.classList.add("wrap");
        galleryItemTextContainer.classList.add("around");
        galleryItemTextContainer.classList.add("contentAround");
        galleryItemTextContainer.classList.add("full");
        galleryItemTextContainer.classList.add("halfHeight");
        galleryItemTextContainer.classList.add("transparent");
        galleryItemTextContainer.classList.add("centerText");

        const galleryItemContentWrapper = document.createElement("wrapper");
        galleryItemContentWrapper.classList.add("galleryItemContentWrapper");
        galleryItemContentWrapper.classList.add("flex");
        galleryItemContentWrapper.classList.add("alignCenter");
        galleryItemContentWrapper.classList.add("full");
        galleryItemContentWrapper.classList.add("fullHeight")

        // Appends title + language to text container
        galleryItemTextContainer.append(itemTitle);
        galleryItemTextContainer.append(itemLanguage);
        galleryItemTextContainer.append(itemGitHubLink);

        // Appends text container to galleryItemContentWrapper
        galleryItemContentWrapper.append(galleryItemTextContainer);

        // Appends text container to gallery item
        // galleryItem.append(galleryItemTextContainer);

        // Appends wrapper to gallery item
        galleryItem.append(galleryItemContentWrapper);
    }
}

// Checks number of items in bottom row of gallery and sets transform-origin according to their position, then fills remaining space with empty items
function addTransformOrigin() {
    const width = window.innerWidth;
    if(width > 1400){
        if(galleryItems.length % 4 === 0){
            bottomLeft(galleryItems[galleryItems.length - 4]);
            for(let i = 3; i > 1; i--){
                bottom(galleryItems[galleryItems.length - i]);
            }
            bottomRight(galleryItems[galleryItems.length - 1]);
        }
        else if(galleryItems.length % 4 === 3) {
            bottomLeft(galleryItems[galleryItems.length - 3]);
            for(let i = 2; i > 0; i--){
                bottom(galleryItems[galleryItems.length - i]);
            }
            createEmptyItem();
        }
        else if(galleryItems.length % 4 === 2) {
            bottomLeft(galleryItems[galleryItems.length - 2]);
            bottom(galleryItems[galleryItems.length - 1]);
            for(let i = 0; i < 2; i++){
                createEmptyItem();
            }
        }
        else {
            bottomLeft(galleryItems[galleryItems.length - 1]);
            for(let i = 0; i < 3; i++){
                createEmptyItem();
            }
        }
    }
    else if (width > 1000){
        if(galleryItems.length % 3 === 0){
            bottomLeft(galleryItems[galleryItems.length - 3]);
            bottom(galleryItems[galleryItems.length - 2]);
            bottomRight(galleryItems[galleryItems.length - 1]);
        }
        else if(galleryItems.length % 3 === 2){
            bottomLeft(galleryItems[galleryItems.length - 2]);
            bottom(galleryItems[galleryItems.length - 1]);
            createEmptyItem()
        }
        else {
            bottomLeft(galleryItems[galleryItems.length - 1]);
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