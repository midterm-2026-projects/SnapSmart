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

describe("Photo Service Unit Tests", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("uploadPhoto()", () => {

    test("should upload photo successfully", () => {

      const mockPhoto = {
        id: 1,
        galleryId: 1,
        photoName: "wedding.jpg",
        fileSize: 120,
      };

      photoModel.uploadPhoto.mockReturnValue(mockPhoto);

      const result = uploadPhoto({
        galleryId: 1,
        photoName: "wedding.jpg",
        fileSize: 120,
      });

      expect(photoModel.uploadPhoto).toHaveBeenCalledOnce();
      expect(result).toEqual(mockPhoto);

    });

    test("should throw error when gallery ID is missing", () => {

      expect(() =>
        uploadPhoto({
          photoName: "wedding.jpg",
          fileSize: 120,
        })
      ).toThrow("Gallery ID is required");

    });

    test("should throw error when photo name is missing", () => {

      expect(() =>
        uploadPhoto({
          galleryId: 1,
          fileSize: 120,
        })
      ).toThrow("Photo Name is required");

    });

    test("should throw error when file size is missing", () => {

      expect(() =>
        uploadPhoto({
          galleryId: 1,
          photoName: "wedding.jpg",
        })
      ).toThrow("File Size is required");

    });

    test("should reject file larger than 500 MB", () => {

      expect(() =>
        uploadPhoto({
          galleryId: 1,
          photoName: "wedding.jpg",
          fileSize: 700,
        })
      ).toThrow("File size exceeds 500 MB");

    });

  });

  describe("getPhotosByGallery()", () => {

    test("should return gallery photos", () => {

      const mockPhotos = [
        {
          id: 1,
          galleryId: 1,
          photoName: "photo1.jpg",
        },
        {
          id: 2,
          galleryId: 1,
          photoName: "photo2.jpg",
        },
      ];

      photoModel.getPhotosByGallery.mockReturnValue(mockPhotos);

      const result = getPhotosByGallery(1);

      expect(photoModel.getPhotosByGallery).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockPhotos);

    });

    test("should throw error when gallery ID is missing", () => {

      expect(() =>
        getPhotosByGallery()
      ).toThrow("Gallery ID is required");

    });

  });

  describe("deletePhoto()", () => {

    test("should delete existing photo", () => {

      const mockPhoto = {
        id: 1,
        galleryId: 1,
        photoName: "photo1.jpg",
      };

      photoModel.getPhotoById.mockReturnValue(mockPhoto);
      photoModel.deletePhoto.mockReturnValue(mockPhoto);

      const result = deletePhoto(1);

      expect(photoModel.getPhotoById).toHaveBeenCalledWith(1);
      expect(photoModel.deletePhoto).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockPhoto);

    });

    test("should throw error when photo does not exist", () => {

      photoModel.getPhotoById.mockReturnValue(null);

      expect(() =>
        deletePhoto(999)
      ).toThrow("Photo not found");

    });

    test("should throw error when photo ID is missing", () => {

      expect(() =>
        deletePhoto()
      ).toThrow("Photo ID is required");

    });

  });

});