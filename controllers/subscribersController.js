import mongoose from "mongoose";

import { Subscriber } from "../models/subscriber.js";

export const getAllSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Subscriber.find({});
        res.render("subscribers", { subscribers });
    } catch (error) {
        next(error);
    }
}

export const getSubscriptionPage = (req, res) => {
    res.render('contact');
}

export const saveSubscriber = async (req, res, next) => {
    try {
        const { name, email, zipCode } = req.body;
        if (!name || !email || !zipCode) {
            // throw new Error("All fields are required");
            return res.status(400).render("error", { errorMessage: "All fields are required" });
        }
        const newSubscriber = new Subscriber({ name, email, zipCode });
        await newSubscriber.save();
        res.render('thanks');
    } catch (error) {
        next(error);
    }
}