import express from "express";
import {
  addRelationships,
  deleteRelationships,
  getRelationships,
} from "../controllers/relationships.js";

const router = express.Router();

router.get("/", getRelationships);

router.post("/", addRelationships);

router.delete("/", deleteRelationships);

export default router;
