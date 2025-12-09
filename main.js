// Main file for the Confetti Cuisine application
// This file sets up the server, routes, and static files for the application
// It uses Express.js for routing and EJS for templating
import express from 'express';
import layouts from 'express-ejs-layouts';
import mongoose from 'mongoose';

import { showCourses } from './controllers/HomeController.js';
import { pageNotFound, internalServerError } from './controllers/ErrorController.js'
import { getAllSubscribers, getSubscriptionPage, saveSubscriber } from './controllers/subscribersController.js';

mongoose.connect('mongodb://localhost:27017/recipe_db');
const db = mongoose.connection;
db.once("open", () => console.log("Successfully connected to MongoDB using Mongoose"));
db.on("error", (error) => console.error("MongoDB connection error:", error));

// var myQuery = Subscriber.findOne({ name: "Jon Wexler"});
// myQuery.exec();
// console.log(myQuery);

const app = express();
app.set('port', process.env.PORT || 3000);
app.set("view engine", 'ejs');

app.use(layouts)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Welcome to Confetti Cuisine");
})
app.get('/courses', showCourses);

app.get('/contact', getSubscriptionPage);

app.post('/subscribe', saveSubscriber);

app.get('/subscribers', getAllSubscribers);

app.use(pageNotFound);
app.use(internalServerError);

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})