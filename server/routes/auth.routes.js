import express from "express";
import {loginUser, logOutUser, signUpUser} from "../controllers/auth.controller.js"
const router = express.Router();

router.post("/login", loginUser)

router.post("/logout", logOutUser)

router.post("/signup", signUpUser)

export default router