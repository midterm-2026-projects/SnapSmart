import * as galleryService from "../services/galleryService.js";

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