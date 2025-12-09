import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const pageNotFound = (req, res) => {
    const errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render("error", { errorMessage: getReasonPhrase(errorCode)});
}

export const internalServerError = (error, req, res, next) => {
    const errorCode = StatusCodes.INTERNAL_SERVER_ERROR;

    console.log(`ERROR occurred: ${error.stack}`);
    
    res.status(errorCode);
    res.render("error", 
        { errorMessage: `${getReasonPhrase(errorCode)} | Sorry, our application is taking a nap!` });
}
