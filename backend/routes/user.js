
import express from "express";
import { saveUserCart } from "../controllers/user.js";

const router = express.Router();

//UPDATE
router.post("/save", saveUserCart);



export default router;
