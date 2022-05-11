const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require(dotenv).config();

const app = express();

app.route("/").get(function(req, res){
    res.sendFile(process.cwd) + "/public/contact.html"
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});

const transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

transporter.verify(function(err, success){
    if(err){
        console.log(err);
    } else {
        console.log("Server ready to receive messages");
    }
});

app.post("/send", function(req, res){
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function(err, fields){
        console.log(fields);
        Object.keys(fields).forEach(function(property){
            data[property] = fields[property].toString();
        });

        const mail = {
            from: data.name,
            to: process.env.EMAIL,
            text: `${data.name} <${data.email}> \n${data.message}`
        };

        transporter.sendMail(mail, function(err, data){
            if(err){
                console.log(err);
                res.status(500).send("Something went wrong");
            } else {
                res.status(200).send("Message sent");
            }
        });

    });
});