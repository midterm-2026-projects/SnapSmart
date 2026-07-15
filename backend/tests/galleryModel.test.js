import { describe, test, expect, beforeEach } from "vitest";

import {
  galleries,
  createGallery,
  getGalleryById,
  deleteGallery,
} from "../models/galleryModel.js";

describe("Gallery Model", () => {
  beforeEach(() => {
    galleries.length = 0;
  });

  describe("createGallery()", () => {
    test("should create a gallery with valid data", () => {
      const gallery = createGallery({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      expect(gallery).toEqual({
        id: 1,
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      expect(galleries.length).toBe(1);
    });
  });

  describe("getGalleryById()", () => {
    test("should return gallery when ID exists", () => {
      createGallery({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      const gallery = getGalleryById(1);

      expect(gallery.id).toBe(1);
      expect(gallery.clientName).toBe("Franklin");
      expect(gallery.imageName).toBe("wedding.jpg");
    });

    test("should return undefined when ID does not exist", () => {
      const gallery = getGalleryById(99);

      expect(gallery).toBeUndefined();
    });
  });

  describe("deleteGallery()", () => {
    test("should delete gallery successfully", () => {
      createGallery({
        clientName: "Franklin",
        imageName: "wedding.jpg",
        eventType: "Wedding",
      });

      const gallery = deleteGallery(1);

      expect(gallery.id).toBe(1);
      expect(galleries.length).toBe(0);
    });

    test("should return null when gallery does not exist", () => {
      const gallery = deleteGallery(99);

      expect(gallery).toBeNull();
    });
  });
});