import * as galleryModel from "../models/galleryModel.js";

/* ===========================
   GALLERY FUNCTIONS
=========================== */

// Create Gallery
export function createGallery(data) {

  if (!data.clientName) {
    throw new Error("Client Name is required");
  }

  if (!data.imageName) {
    throw new Error("Image Name is required");
  }

  if (!data.eventType) {
    throw new Error("Event Type is required");
  }

  if (data.fileSize == null) {
    throw new Error("File Size is required");
  }

  if (data.fileSize > 500) {
    throw new Error("File size exceeds the 500 MB limit");
  }

  return galleryModel.createGallery(data);

}

// Get Gallery by ID
export function getGalleryById(id) {

  return galleryModel.getGalleryById(id);

}

// Delete Gallery
export function deleteGallery(id) {

  if (!id) {
    throw new Error("Gallery ID is required");
  }

  const gallery = galleryModel.getGalleryById(id);

  if (!gallery) {
    throw new Error("Gallery not found");
  }

  return galleryModel.deleteGallery(id);

}


/* ===========================
   PHOTO MANAGEMENT FUNCTIONS
=========================== */

// Upload Photo
export function uploadPhoto(galleryId, data) {

  if (!galleryId) {
    throw new Error("Gallery ID is required");
  }

  if (!data.photoName) {
    throw new Error("Photo Name is required");
  }

  if (data.fileSize == null) {
    throw new Error("File Size is required");
  }

  if (data.fileSize > 500) {
    throw new Error("File size exceeds the 500 MB limit");
  }

  const gallery = galleryModel.getGalleryById(galleryId);

  if (!gallery) {
    throw new Error("Gallery not found");
  }

  return galleryModel.uploadPhoto(galleryId, data);

}

// Get Photos by Gallery
export function getPhotosByGallery(galleryId) {

  if (!galleryId) {
    throw new Error("Gallery ID is required");
  }

  const gallery = galleryModel.getGalleryById(galleryId);

  if (!gallery) {
    throw new Error("Gallery not found");
  }

  return galleryModel.getPhotosByGallery(galleryId);

}

// Delete Photo
export function deletePhoto(id) {

  if (!id) {
    throw new Error("Photo ID is required");
  }

  const photo = galleryModel.deletePhoto(id);

  if (!photo) {
    throw new Error("Photo not found");
  }

  return photo;

}