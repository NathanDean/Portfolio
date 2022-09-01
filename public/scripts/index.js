// Tracks width of browser window
let width = window.innerWidth;
let height = window.innerHeight;

// Selects elements
const body = document.querySelector("body");
const title = document.querySelector("#indexTitle");
const menu = document.querySelector("#indexMenu");
const explore = document.querySelector("#explore");
const goHome = document.querySelector("#goHome");

// Sets delay before functions are called to toggle display and opacity of title/menu/explore/goHome
const transitionTime = 900;

// Records whether transition is in progress
let isTransitionInProgress = false;

// Toggle classes to control display and opacity of title/menu/explore/goHome
function toggleDisplay(el){
    el.classList.toggle("none");
    el.classList.toggle("flex");
};

function toggleOpacity(el){
    el.classList.toggle("transparent");
};

// Collect functions that toggle display and opacity of title/menu/explore/goHome
function titleOff(){
    toggleOpacity(title);
    toggleOpacity(explore);
    toggleDisplay(menu);
    toggleDisplay(goHome);
};

function menuOn(){
    toggleOpacity(menu);
    toggleOpacity(goHome);
    toggleDisplay(title);
    toggleDisplay(explore);
};

function menuOff(){
    toggleOpacity(menu);
    toggleOpacity(goHome);
    toggleDisplay(title);
    toggleDisplay(explore);
};

function titleOn(){
    toggleDisplay(menu);
    toggleDisplay(goHome);
    toggleOpacity(title);
    toggleOpacity(explore);
};

// Turns title off and menu on when user clicks explore
explore.addEventListener("click", function(){
    // If transition is not already in progress, turn off title and turn on menu
    if(!isTransitionInProgress){
        isTransitionInProgress = !isTransitionInProgress;
        titleOff();
        // Allows title to fade out before beginning menu fade in
        setTimeout(function(){
            menuOn();
            isTransitionInProgress = !isTransitionInProgress;
        }, transitionTime);
    }
});

// Turns menu off and title on when user clicks goHome
goHome.addEventListener("click", function(){
    // If transition is not already in progress, turn off menu and turn on title
    if(!isTransitionInProgress){
        isTransitionInProgress = !isTransitionInProgress;
        menuOff();
        // Allows menu to fade out before beginning title fade in
        setTimeout(function(){
            titleOn();
            isTransitionInProgress = !isTransitionInProgress;
        }, transitionTime);
    }
})

// Checks window width on load/resize and adds or removes <br> from title
if(width < 450 || height < 450){
    title.innerHTML = '<h1 id="indexHeading">NATHAN DEAN</h1><h3 id="indexSubheading">front-end developer</h3>';
}

window.addEventListener("resize", function(){
    width = window.innerWidth;
    if(width < 450 || height < 450){
            title.innerHTML = '<h1 id="indexHeading">NATHAN DEAN</h1><h3 id="indexSubheading">front-end developer</h3>';
    } else {
        title.innerHTML = '<h1 id="indexHeading">NATHAN<br>DEAN</h1><h3 id="indexSubheading">front-end developer</h3>';
    }
});