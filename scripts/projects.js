// Stores info to be added to gallery items
const projects = [];

class Project {
    title;
    language;
    github;
    codepen;
    image;
    lightText;

    constructor(title, github, codepen, language, image, lightText){
            this.title = title;
            this.github = github;
            this.codepen = codepen;
            this.language = language;
            this.image = image;
            this.lightText = lightText;
        }
}

// Loads sample projects into array (planning to connect to database in future)
for(let i = 0; i < 17; i++){
    const project = new Project("Perlin Terrain", "#", "#", "Processing", "images/perlin.JPG", false);
    projects.push(project);
}

export default projects;