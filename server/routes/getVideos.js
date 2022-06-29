import express from 'express'
import {videosController, videoController} from "../controllers/videosController.js";

const router = express.Router();

//GET - download
router.get("/get-videos", videosController);

router.post("/get-video", videoController);

export default router;