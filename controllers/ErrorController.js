
const httpStatus = require('http-status-code');

exports.pageNotFound = (req, res) => {
    let errorMessage = httpStatus.getMessage(404);
    res.status(404);
    res.render("error", {errorMessage});
}

exports.internalServerError = (error, req, res, next) => {
    let errorMessage = httpStatus.getMessage(500);
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(500);
    res.render(`${errorMessage} | Sorry, our application is taking a nap!`);
}