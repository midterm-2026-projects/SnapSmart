import { describe, test, expect, vi, beforeEach } from "vitest";

import * as galleryModel from "../models/galleryModel.js";

import {
  createGallery,
  getGalleryById,
  deleteGallery,
} from "../services/galleryService.js";

vi.mock("../models/galleryModel.js", () => ({
  createGallery: vi.fn(),
  getGalleryById: vi.fn(),
  deleteGallery: vi.fn(),
}));

describe("Gallery Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createGallery()", () => {
    test("should create gallery with valid data", () => {
      galleryModel.createGallery.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      const gallery = createGallery({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      expect(gallery.clientName).toBe("Franklin");

      expect(galleryModel.createGallery).toHaveBeenCalledWith({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });
    });

    test("should throw error when client name is missing", () => {
      expect(() =>
        createGallery({
          imageName: "wedding.jpg",
          eventType: "Wedding",
        })
      ).toThrow("Client Name is required");
    });

    test("should throw error when image name is missing", () => {
      expect(() =>
        createGallery({
          clientName: "Franklin",
          eventType: "Wedding",
        })
      ).toThrow("Image Name is required");
    });

    test("should throw error when event type is missing", () => {
      expect(() =>
        createGallery({
          clientName: "Franklin",
          imageName: "wedding.jpg",
        })
      ).toThrow("Event Type is required");
    });
  });

  describe("getGalleryById()", () => {
    test("should return gallery when ID exists", () => {
      galleryModel.getGalleryById.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      const gallery = getGalleryById(1);

      expect(gallery.id).toBe(1);

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(1);
    });

    test("should return undefined when gallery does not exist", () => {
      galleryModel.getGalleryById.mockReturnValue(undefined);

      const gallery = getGalleryById(99);

      expect(gallery).toBeUndefined();

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(99);
    });
  });

  describe("deleteGallery()", () => {
    test("should delete gallery successfully", () => {
      galleryModel.getGalleryById.mockReturnValue({
        id: 1,
      });

      galleryModel.deleteGallery.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      const gallery = deleteGallery(1);

      expect(gallery.id).toBe(1);

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(1);

      expect(galleryModel.deleteGallery).toHaveBeenCalledWith(1);
    });

    test("should throw error when gallery is not found", () => {
      galleryModel.getGalleryById.mockReturnValue(null);

      expect(() => deleteGallery(99)).toThrow("Gallery not found");

      expect(galleryModel.getGalleryById).toHaveBeenCalledWith(99);
    });
  });
});