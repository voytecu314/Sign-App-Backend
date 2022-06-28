import filesModel from "../model/fileModel.js";

const fileController = async(req,res) => {
    await filesModel.create(req.body)
    res.status(200).json({msg: 'file uploaded'})
}

export default fileController