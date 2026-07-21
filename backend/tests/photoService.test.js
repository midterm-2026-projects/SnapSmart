import { describe, test, expect, vi, beforeEach } from "vitest";

import * as photoModel from "../models/photoModel.js";

import {
  uploadPhoto,
  getPhotosByGallery,
  deletePhoto,
} from "../services/photoService.js";

vi.mock("../models/photoModel.js", () => ({
  uploadPhoto: vi.fn(),
  getPhotoById: vi.fn(),
  getPhotosByGallery: vi.fn(),
  deletePhoto: vi.fn(),
}));

describe("Photo Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("uploadPhoto()", () => {
    test("should upload photo successfully", () => {
      photoModel.uploadPhoto.mockReturnValue({
        id: 1,
        galleryId: 1,
        photoName: "wedding.jpg",
        fileSize: 300,
      });

      const photo = uploadPhoto({
        galleryId: 1,
        photoName: "wedding.jpg",
        fileSize: 300,
      });

      expect(photo.galleryId).toBe(1);

      expect(photoModel.uploadPhoto).toHaveBeenCalledWith({
        galleryId: 1,
        photoName: "wedding.jpg",
        fileSize: 300,
      });
    });

    test("should throw error when gallery ID is missing", () => {
      expect(() =>
        uploadPhoto({
          photoName: "wedding.jpg",
          fileSize: 300,
        })
      ).toThrow("Gallery ID is required");
    });

    test("should throw error when photo name is missing", () => {
      expect(() =>
        uploadPhoto({
          galleryId: 1,
          fileSize: 300,
        })
      ).toThrow("Photo Name is required");
    });

    test("should throw error when file size exceeds 500 MB", () => {
      expect(() =>
        uploadPhoto({
          galleryId: 1,
          photoName: "wedding.jpg",
          fileSize: 700,
        })
      ).toThrow("File size exceeds the 500 MB limit");
    });
  });

  describe("getPhotosByGallery()", () => {
    test("should return photos by gallery", () => {
      photoModel.getPhotosByGallery.mockReturnValue([
        {
          id: 1,
          galleryId: 1,
          photoName: "wedding.jpg",
        },
      ]);

      const photos = getPhotosByGallery(1);

      expect(photos.length).toBe(1);

      expect(photoModel.getPhotosByGallery).toHaveBeenCalledWith(1);
    });

    test("should return empty array when gallery has no photos", () => {
      photoModel.getPhotosByGallery.mockReturnValue([]);

      const photos = getPhotosByGallery(99);

      expect(photos).toEqual([]);

      expect(photoModel.getPhotosByGallery).toHaveBeenCalledWith(99);
    });
  });

  describe("deletePhoto()", () => {
    test("should delete photo successfully", () => {
      photoModel.getPhotoById.mockReturnValue({
        id: 1,
        galleryId: 1,
        photoName: "wedding.jpg",
      });

      photoModel.deletePhoto.mockReturnValue({
        id: 1,
        galleryId: 1,
        photoName: "wedding.jpg",
      });

      const photo = deletePhoto(1);

      expect(photo.id).toBe(1);

      expect(photoModel.getPhotoById).toHaveBeenCalledWith(1);

      expect(photoModel.deletePhoto).toHaveBeenCalledWith(1);
    });

    test("should throw error when photo is not found", () => {
      photoModel.getPhotoById.mockReturnValue(null);

      expect(() => deletePhoto(99)).toThrow("Photo not found");

      expect(photoModel.getPhotoById).toHaveBeenCalledWith(99);
    });
  });
});