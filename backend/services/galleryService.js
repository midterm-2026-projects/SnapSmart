import * as galleryModel from "../models/galleryModel.js";

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

  return galleryModel.createGallery(data);
}

export function getGalleryById(id) {
  return galleryModel.getGalleryById(id);
}

export function deleteGallery(id) {
  const gallery = galleryModel.getGalleryById(id);

  if (!gallery) {
    throw new Error("Gallery not found");
  }

  return galleryModel.deleteGallery(id);
}