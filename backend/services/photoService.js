import * as photoModel from "../models/photoModel.js";

// Upload Photo
export function uploadPhoto(data) {
  if (!data.galleryId) {
    throw new Error("Gallery ID is required");
  }

  if (!data.photoName) {
    throw new Error("Photo Name is required");
  }

  if (data.fileSize && data.fileSize > 500) {
    throw new Error("File size exceeds the 500 MB limit");
  }

  return photoModel.uploadPhoto(data);
}

// Get Photos By Gallery
export function getPhotosByGallery(galleryId) {
  return photoModel.getPhotosByGallery(galleryId);
}

// Delete Photo
export function deletePhoto(id) {
  const photo = photoModel.getPhotoById(id);

  if (!photo) {
    throw new Error("Photo not found");
  }

  return photoModel.deletePhoto(id);
}