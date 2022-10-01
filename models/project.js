const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: String,
    language: String,
    appLink: String,
    github: String,
    image: String
})

const Project = mongoose.model("Project", ProjectSchema);

export default Project;