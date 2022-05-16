const express = require("express");
const app = express();

const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);

    const transporter = nodemailer.createTransport({

        host: "smtp.hostinger.com",
        port: 465,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: "nathan@nathandean.co.uk",
        to: "nathan@nathandean.co.uk",
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
    res.sendFile(__dirname + "/public/work.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});