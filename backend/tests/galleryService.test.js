import { describe, test, expect, vi, beforeEach } from "vitest";

import * as galleryModel from "../models/galleryModel.js";

import {
  createGallery,
  getGalleryById,
  getPhotosByGallery,
  deleteGallery,
  uploadPhoto,
  deletePhoto,
} from "../services/galleryService.js";

vi.mock("../models/galleryModel.js", () => ({
  createGallery: vi.fn(),
  getGalleryById: vi.fn(),
  getPhotosByGallery: vi.fn(),
  deleteGallery: vi.fn(),
}));

describe("Gallery Service Unit Tests", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* ===========================
      GALLERY TESTS
  =========================== */

  describe("createGallery()", () => {

    test("should create gallery with valid data", () => {

      galleryModel.createGallery.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
        fileSize: 120,
      });

      const gallery = createGallery({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
        fileSize: 120,
      });

      expect(gallery.clientName).toBe("Franklin");

      expect(galleryModel.createGallery).toHaveBeenCalledWith({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
        fileSize: 120,
      });

    });

    test("should throw error when client name is missing", () => {

      expect(() =>
        createGallery({
          imageName: "wedding.jpg",
          eventType: "Wedding",
          fileSize: 120,
        })
      ).toThrow("Client Name is required");

    });

    test("should throw error when image name is missing", () => {

      expect(() =>
        createGallery({
          clientName: "Franklin",
          eventType: "Wedding",
          fileSize: 120,
        })
      ).toThrow("Image Name is required");

    });

    test("should throw error when event type is missing", () => {

      expect(() =>
        createGallery({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          fileSize: 120,
        })
      ).toThrow("Event Type is required");

    });

    test("should throw error when file size exceeds 500 MB", () => {

      expect(() =>
        createGallery({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          eventType: "Wedding",
          fileSize: 700,
        })
      ).toThrow("File size exceeds the 500 MB limit");

    });

  });

  describe("getGalleryById()", () => {

    test("should return gallery when ID exists", () => {

      galleryModel.getGalleryById.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
      });

      const gallery = getGalleryById(1);

      expect(gallery.id).toBe(1);

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(1);

    });

    test("should return undefined when gallery does not exist", () => {

      galleryModel.getGalleryById.mockReturnValue(undefined);

      const gallery = getGalleryById(99);

      expect(gallery).toBeUndefined();

    });

  });

  describe("deleteGallery()", () => {

    test("should delete gallery successfully", () => {

      galleryModel.getGalleryById.mockReturnValue({
        id: 1,
      });

      galleryModel.deleteGallery.mockReturnValue({
        id: 1,
      });

      const gallery = deleteGallery(1);

      expect(gallery.id).toBe(1);

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(1);

      expect(galleryModel.deleteGallery).toHaveBeenCalledWith(1);

    });

    test("should throw error when gallery is not found", () => {

      galleryModel.getGalleryById.mockReturnValue(null);

      expect(() =>
        deleteGallery(99)
      ).toThrow("Gallery not found");

    });

  });

  /* ===========================
      PHOTO MANAGEMENT TESTS
  =========================== */

  describe("uploadPhoto()", () => {

    test("should upload photo successfully", () => {

      galleryModel.createGallery.mockReturnValue({
        id: 2,
        galleryId: 1,
        imageName: "photo1.jpg",
        fileSize: 120,
      });

      const photo = uploadPhoto({
        galleryId: 1,
        photoName: "photo1.jpg",
        fileSize: 120,
      });

      expect(photo.id).toBe(2);

    });

    test("should throw error when gallery ID is missing", () => {

      expect(() =>
        uploadPhoto({
          photoName: "photo1.jpg",
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
          photoName: "photo1.jpg",
        })
      ).toThrow("File Size is required");

    });

    test("should reject file larger than 500 MB", () => {

      expect(() =>
        uploadPhoto({
          galleryId: 1,
          photoName: "photo1.jpg",
          fileSize: 700,
        })
      ).toThrow("File size exceeds the 500 MB limit");

    });

  });

  describe("getPhotosByGallery()", () => {

    test("should return gallery photos", () => {

      const mockPhotos = [
        {
          id: 1,
          galleryId: 1,
          imageName: "photo1.jpg",
        },
        {
          id: 2,
          galleryId: 1,
          imageName: "photo2.jpg",
        },
      ];

      galleryModel.getPhotosByGallery.mockReturnValue(mockPhotos);

      const photos = getPhotosByGallery(1);

      expect(photos).toEqual(mockPhotos);

      expect(galleryModel.getPhotosByGallery).toHaveBeenCalledWith(1);

    });

    test("should throw error when gallery ID is missing", () => {

      expect(() =>
        getPhotosByGallery()
      ).toThrow("Gallery ID is required");

    });

  });

  describe("deletePhoto()", () => {

    test("should delete photo successfully", () => {

      galleryModel.getGalleryById.mockReturnValue({
        id: 1,
      });

      galleryModel.deleteGallery.mockReturnValue({
        id: 1,
      });

      const photo = deletePhoto(1);

      expect(photo.id).toBe(1);

    });

    test("should throw error when photo does not exist", () => {

      galleryModel.getGalleryById.mockReturnValue(null);

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