# Portfolio

Hi, thanks for visiting.

This is my portfolio website, which you can view at <a href = "https://www.nathandean.co.uk">nathandean.co.uk</a>.

I designed it in Figma (you can view the designs <a href = "https://www.figma.com/file/reGAQpW6X03H6yemheC9HY/PortfolioD2?node-id=0%3A1">here</a>) and built the front-end using HTML, CSS and JavaScript, while the back-end uses Node.js, Express and Nodemailer.

The site was initially built for a desktop display, and is fully responsive for smaller laptops, tablets and mobile devices, in both portrait and landscape orientation.

I've used JavaScript to animate the title and menu on the index page and enable navigation to the rest of the site at smaller screen sizes, and to change the transform-origin property of projects in the gallery according to their position on the "work" page.  I've also added a script to control the navbar header display at different screen sizes and orientation, and moved the array containing the projects to a separate module, which I've imported to work.js.

The app is deployed to Heroku.  On the back-end, the form on the contact page uses Nodemailer to automatically send an email on submit, and I'm currently working on adding further back-end functionality to load projects to the gallery from a database.

Finally, I'm fixing a couple of small bugs affecting the display of the nav menu and display on some devices, and will also be further refactoring the CSS and JavaScript files.

TL;DR

* Portfolio website designed in Figma and built using HTML, CSS, JavaScript, Node.js and Express
* Responsive for desktop, laptop, tablet and mobile (landscape and portrait)
* Projects load to gallery from projects.js module imported to work.js
* Contact form sends automatically send email on submit using Nodemailer
* App deployed on Heroku

Currently working on:
* Adding back-end to load projects to gallery from database
* Fixing small bugs on nav menu and gallery
* Refactoring CSS and JavaScript
