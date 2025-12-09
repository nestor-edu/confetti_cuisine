import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});


export const Subscriber = mongoose.model('Subscriber', subscriberSchema);