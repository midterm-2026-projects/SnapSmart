import * as photoModel from "../models/photoModel.js";

// Upload Photo
export function uploadPhoto(data) {

  if (!data.galleryId) {
    throw new Error("Gallery ID is required");
  }

  if (!data.photoName) {
    throw new Error("Photo Name is required");
  }

  if (data.fileSize == null) {
    throw new Error("File Size is required");
  }

  if (data.fileSize > 500) {
    throw new Error("File size exceeds 500 MB");
  }

  return photoModel.uploadPhoto(data);
}

// Get Photos by Gallery
export function getPhotosByGallery(galleryId) {

  if (!galleryId) {
    throw new Error("Gallery ID is required");
  }

  return photoModel.getPhotosByGallery(galleryId);
}

// Delete Photo
export function deletePhoto(id) {

  if (!id) {
    throw new Error("Photo ID is required");
  }

  const photo = photoModel.getPhotoById(id);

  if (!photo) {
    throw new Error("Photo not found");
  }

  return photoModel.deletePhoto(id);
}