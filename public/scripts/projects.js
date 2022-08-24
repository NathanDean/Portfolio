// Stores info to be added to gallery items
const projects = [

    {
        title: "Smoking Text",
        language: "CSS",
        github: "https://github.com/NathanDean/WebDevBootcamp/tree/main/Week%202/Smoke",
        image: "./images/smoke.JPG"
    },
    {
        title: "Mouse Tracker",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/MouseTracking",
        image: "./images/mouseTracking.JPG"
    },
    {
        title: "Pointillist Image Filter",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/PointillistEffect",
        image: "./images/pointillism.JPG"
    },
    {
        title: "Perlin Terrain",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/PerlinTerrain",
        image: "./images/perlin.JPG"
    },
    {
        title: "Todo App",
        language: "React",
        appLink: "https://whispering-cliffs-16765.herokuapp.com/",
        github: "https://github.com/NathanDean/reactTodo",
        image: "./images/todo.JPG"
    },
    {
        title: "Redux Comments Exercise",
        language: "React",
        appLink: "https://young-reaches-78823.herokuapp.com/",
        github: "https://github.com/NathanDean/comments",
        image: "./images/comments.JPG"
    },
    {
        title: "YouTube API Video Search",
        language: "React",
        appLink: "https://peaceful-atoll-49366.herokuapp.com",
        github: "https://github.com/NathanDean/ReactVideoSearch",
        image: "./images/video.JPG"
    },
    {
        title: "Portfolio",
        language: "JavaScript/Node.js/Express",
        github: "https://github.com/NathanDean/Portfolio",
        image: "./images/portfolio.JPG"
    },
    {
        title: "Moments social media app",
        language: "React/Node.js/Express/MongoDB",
        appLink: "https://sheltered-reef-45999.herokuapp.com/",
        github: "#",
        image: "./images/moments.JPG"
    }
];

// class Project {
//     title;
//     language;
//     github;
//     image;

//     constructor(title, github, codepen, language, image){
//             this.title = title;
//             this.github = github;
//             this.language = language;
//             this.image = image;
//         }
// }

// Loads sample projects into array (planning to connect to database in future)
// for(let i = 0; i < 17; i++){
//     const project = new Project("Perlin Terrain", "#", "#", "Processing", "images/perlin.JPG", false);
//     projects.push(project);
// }

export default projects;