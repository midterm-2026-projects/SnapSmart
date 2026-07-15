import express from "express";

import {
  createGallery,
  getGalleryById,
  deleteGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/gallery", createGallery);

router.get("/gallery/:id", getGalleryById);

router.delete("/gallery/:id", deleteGallery);

export default router;