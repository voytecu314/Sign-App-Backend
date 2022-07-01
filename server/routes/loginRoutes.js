import express from "express";
import {
  userSignup,
  userLogin,
  loggedIn
} from "../controllers/loginControllers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//POST - signup
router.post("/signup", userSignup);

//POST - login
router.post("/login", userLogin);

//POST - loggedIn
router.post("/auth", auth, loggedIn);

export default router;