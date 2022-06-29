import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    FullName: String,
    email: String,
    message:String
})

const contactModel = mongoose.model('contact', contactSchema) 

export default contactModel