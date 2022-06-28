import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    fileName: String,
    data: String
})

const filesModel = mongoose.model('File', fileSchema) 

export default filesModel