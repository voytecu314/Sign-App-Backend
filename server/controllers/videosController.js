import filesModel from "../model/fileModel.js";

export const videosController = async(req,res) => {
    const videos = await filesModel.find();
    res.status(200).json({vid: videos})
}

export const videoController = async(req,res) => {
    const video = await filesModel.find(req.body);
    res.status(200).json({vid: video})
}

