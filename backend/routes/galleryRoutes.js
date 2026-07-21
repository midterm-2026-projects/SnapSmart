import express from "express";

import {
  createGallery,
  getGalleryById,
  deleteGallery,
  uploadPhoto,
  getPhotosByGallery,
  deletePhoto,
} from "../controllers/galleryController.js";

const router = express.Router();

/* ===========================
   GALLERY ROUTES
=========================== */

// Create Gallery
router.post("/gallery", createGallery);

// Get Gallery by ID
router.get("/gallery/:id", getGalleryById);

// Delete Gallery
router.delete("/gallery/:id", deleteGallery);

/* ===========================
   PHOTO MANAGEMENT ROUTES
=========================== */

// Upload Photo
router.post("/gallery/:id/photos", uploadPhoto);

// Get Photos by Gallery
router.get("/gallery/:id/photos", getPhotosByGallery);

// Delete Photo
router.delete("/photos/:id", deletePhoto);

export default router;