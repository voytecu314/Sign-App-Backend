import express from "express";
import {
  userSignup,
  userLogin
} from "../controllers/loginControllers.js";

const router = express.Router();

//POST - signup
router.post("/signup", userSignup);

//POST - login
router.post("/login", userLogin);

export default router;