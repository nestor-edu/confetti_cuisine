// Main file for the Confetti Cuisine application
// This file sets up the server, routes, and static files for the application
// It uses Express.js for routing and EJS for templating
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

const errorController = require('./controllers/ErrorController');
const homeController = require('./controllers/HomeController');

app.set('port', process.env.PORT || 3000);
app.set("view engine", 'ejs');

app.use(layouts)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})

app.get('/', (req, res) => {
    res.send("Welcome to Confetti Cuisine");
})

app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.responseSignUp);

app.use(errorController.pageNotFound);
app.use(errorController.internalServerError);