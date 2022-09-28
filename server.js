require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

// const Project = require("./models/project");

const PORT = process.env.PORT || 5000;

const app = express();

// const mongoose = require("mongoose");
// mongoose.connect(
//     process.env.MONGO_URI, 
//     { useNewUrlParser: true, useUnifiedTopology: true }
// ).then(() => {
//     console.log("Connected to database.")
// }).catch(error => {
//     console.log("Error connecting to database.", error)
// });

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function(req, res){
    const transporter = nodemailer.createTransport({

        host: "smtp.hostinger.com",
        port: 465,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from:  process.env.USER,
        to:  process.env.USER,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.send("error");
        } else {
            console.log("Message sent");
            console.log(info);
            res.send("success");
        }
    })
})

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/work", function(req, res){
    // try {
    
    //     res.status(200).json({
    //         data: postMessages,
    //         currentPage: Number(page),
    //         numberOfPages: Math.ceil(noOfPosts / LIMIT)
    //     });

    // } catch (error) {
        


    // }
    
    
    res.sendFile(__dirname + "/public/work.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});