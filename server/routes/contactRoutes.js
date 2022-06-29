import express from 'express'
import contactController from "../controllers/contactForm.js";



const router = express.Router();

//POST - upload
router.post("/contact-form",contactController);

export default router;