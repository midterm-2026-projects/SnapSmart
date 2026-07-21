import * as galleryService from "../services/galleryService.js";

/* ===========================
   GALLERY CONTROLLERS
=========================== */

export function createGallery(req, res) {
  try {
    const gallery = galleryService.createGallery(req.body);

    return res.status(201).json({
      message: "Gallery uploaded successfully",
      data: gallery,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export function getGalleryById(req, res) {
  try {
    const gallery = galleryService.getGalleryById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        message: "Gallery not found",
      });
    }

    return res.status(200).json({
      message: "Gallery retrieved successfully",
      data: gallery,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export function deleteGallery(req, res) {
  try {
    const gallery = galleryService.deleteGallery(req.params.id);

    return res.status(200).json({
      message: "Gallery deleted successfully",
      data: gallery,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
}

/* ===========================
   PHOTO CONTROLLERS
=========================== */

// POST /gallery/:id/photos
export function uploadPhoto(req, res) {
  try {
    const photo = galleryService.uploadPhoto(
      req.params.id,
      req.body
    );

    return res.status(201).json({
      success: true,
      data: photo,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

// GET /gallery/:id/photos
export function getPhotosByGallery(req, res) {
  try {
    const photos = galleryService.getPhotosByGallery(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: photos,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE /photos/:id
export function deletePhoto(req, res) {
  try {
    const photo = galleryService.deletePhoto(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: photo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}