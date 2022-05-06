# Portfolio

Hi, thanks for visiting.

This is my portfolio website.  I designed it in Figma (https://www.figma.com/file/reGAQpW6X03H6yemheC9HY/PortfolioD2?node-id=0%3A1) and built the front-end using HTML, CSS and JavaScript.

The site was initially built for a desktop display, and is fully responsive for smaller laptops, tablets and mobile devices, in both portrait and landscape orientation.

I've used JavaScript to animate the title and menu on index.html and enable navigation to the rest of the site at smaller screen sizes, and to change the transform-origin property of projects in the gallery according to their position on work.html.  I've also added a script to control the navbar header display at different screen sizes and orientation, and moved the array containing the projects to a separate module, which I've imported to work.js.

I'm currently working on adding a back-end to load projects to the gallery from a database, and adding functionality to the contact form using Nodemailer.  I'm also fixing a couple of small bugs affecting how the nav menu displays when a device is rotated, and the display of the gallery on very large mobiles in landscape orientation.

In future I'm also planning to create a password protected section to allow me to upload projects to the database through the website.

I've connected this GitHub repository to Hostinger, enabling auto-deployment whenever I push a change to the repository.

TL;DR

* Portfolio website designed in Figma and built using HTML, CSS and JavaScript
* Responsive for desktop, laptop, tablet and mobile (landscape and portrait)
* Projects load to gallery from projects.js module imported to work.js
* Changes to GitHub repository auto-deploy to Hostinger

Currently working on:
* Adding back-end to load projects to gallery from database
* Adding functionality to contact form using Nodemailer
* Fixing small bugs on nav menu and gallery

To do:
* Add password protected section to allow uploading of projects to database via website
