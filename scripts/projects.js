// Stores info to be added to gallery items
const projects = [

    {
        title: "Mouse Tracker",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/MouseTracking",
        codepen: undefined,
        image: "./images/mouseTracking.JPG",
        lightText: true,
        outline: true
    },
    {
        title: "Watercolour Effect",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/WatercolourEffect",
        codepen: undefined,
        image: "./images/watercolour.JPG",
        lightText: true,
        outline: false
    },
    {
        title: "Smoking Text",
        language: "HTML/CSS",
        github: "https://github.com/NathanDean/WebDevBootcamp/tree/main/Week%202/Smoke",
        codepen: undefined,
        image: "./images/smoke.JPG",
        lightText: true,
        outline: true
    },
    {
        title: "Perlin Terrain",
        language: "Processing",
        github: "https://github.com/NathanDean/ProcessingProjects/tree/main/PerlinTerrain",
        codepen: undefined,
        image: "./images/perlin.JPG",
        lightText: false,
        outline: false
    },
    {
        title: "Portfolio",
        language: "HTML/CSS/JavaScript",
        github: "https://github.com/NathanDean/Portfolio",
        codepen: undefined,
        image: "./images/portfolio.JPG",
        lightText: true,
        outline: false
    }

];

// class Project {
//     title;
//     language;
//     github;
//     codepen;
//     image;
//     lightText;

//     constructor(title, github, codepen, language, image, lightText){
//             this.title = title;
//             this.github = github;
//             this.codepen = codepen;
//             this.language = language;
//             this.image = image;
//             this.lightText = lightText;
//         }
// }

// Loads sample projects into array (planning to connect to database in future)
// for(let i = 0; i < 17; i++){
//     const project = new Project("Perlin Terrain", "#", "#", "Processing", "images/perlin.JPG", false);
//     projects.push(project);
// }

export default projects;