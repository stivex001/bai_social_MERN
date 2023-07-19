import express from "express";
import { addLikes, getLikes } from "../controllers/likes.js";

const router = express.Router();

router.get("/", getLikes)

router.post('/', addLikes)

export default router;
