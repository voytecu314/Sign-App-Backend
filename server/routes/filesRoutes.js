import express from 'express'
import fileController from "../controllers/filesController.js";



const router = express.Router();

//POST - upload
router.post("/upload-file", fileController);

export default router;