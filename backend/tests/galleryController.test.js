import { describe, test, expect, vi, beforeEach } from "vitest";

import * as galleryService from "../services/galleryService.js";

import {
  createGallery,
  getGalleryById,
  deleteGallery,
  uploadPhoto,
  getPhotosByGallery,
  deletePhoto,
} from "../controllers/galleryController.js";

vi.mock("../services/galleryService.js", () => ({
  createGallery: vi.fn(),
  getGalleryById: vi.fn(),
  deleteGallery: vi.fn(),
  uploadPhoto: vi.fn(),
  getPhotosByGallery: vi.fn(),
  deletePhoto: vi.fn(),
}));

describe("Gallery Controller Unit Tests", () => {
  let req;
  let res;

  beforeEach(() => {
    vi.clearAllMocks();

    req = {
      body: {},
      params: {},
    };

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
  });

  /* ===========================
      GALLERY CONTROLLERS
  =========================== */

  describe("createGallery()", () => {
    test("should create gallery successfully", () => {
      req.body = {
        clientName: "Franklin",
        imageName: "cover.jpg",
        eventType: "Wedding",
        fileSize: 100,
      };

      galleryService.createGallery.mockReturnValue({
        id: 1,
        ...req.body,
      });

      createGallery(req, res);

      expect(galleryService.createGallery).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        message: "Gallery uploaded successfully",
        data: {
          id: 1,
          clientName: "Franklin",
          imageName: "cover.jpg",
          eventType: "Wedding",
          fileSize: 100,
        },
      });
    });

    test("should return 400 when service throws error", () => {
      galleryService.createGallery.mockImplementation(() => {
        throw new Error("Client Name is required");
      });

      createGallery(req, res);

      expect(res.status).toHaveBeenCalledWith(400);

      expect(res.json).toHaveBeenCalledWith({
        message: "Client Name is required",
      });
    });
  });

  describe("getGalleryById()", () => {
    test("should return gallery successfully", () => {
      req.params.id = 1;

      galleryService.getGalleryById.mockReturnValue({
        id: 1,
      });

      getGalleryById(req, res);

      expect(galleryService.getGalleryById).toHaveBeenCalledWith(1);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("should return 404 when gallery not found", () => {
      req.params.id = 99;

      galleryService.getGalleryById.mockReturnValue(null);

      getGalleryById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);

      expect(res.json).toHaveBeenCalledWith({
        message: "Gallery not found",
      });
    });

    test("should return 400 when service throws error", () => {
      req.params.id = 1;

      galleryService.getGalleryById.mockImplementation(() => {
        throw new Error("Invalid ID");
      });

      getGalleryById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);

      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid ID",
      });
    });
  });

  describe("deleteGallery()", () => {
    test("should delete gallery successfully", () => {
      req.params.id = 1;

      galleryService.deleteGallery.mockReturnValue({
        id: 1,
      });

      deleteGallery(req, res);

      expect(galleryService.deleteGallery).toHaveBeenCalledWith(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        message: "Gallery deleted successfully",
        data: {
          id: 1,
        },
      });
    });

    test("should return 404 when gallery is not found", () => {
      req.params.id = 99;

      galleryService.deleteGallery.mockImplementation(() => {
        throw new Error("Gallery not found");
      });

      deleteGallery(req, res);

      expect(res.status).toHaveBeenCalledWith(404);

      expect(res.json).toHaveBeenCalledWith({
        message: "Gallery not found",
      });
    });
  });

  /* ===========================
      PHOTO CONTROLLERS
  =========================== */

  describe("uploadPhoto()", () => {
    test("should upload photo successfully", () => {
      req.params.id = 1;

      req.body = {
        photoName: "photo1.jpg",
        fileSize: 120,
      };

      galleryService.uploadPhoto.mockReturnValue({
        id: 1,
        ...req.body,
      });

      uploadPhoto(req, res);

      expect(galleryService.uploadPhoto).toHaveBeenCalledWith(
        1,
        req.body
      );

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {
          id: 1,
          photoName: "photo1.jpg",
          fileSize: 120,
        },
      });
    });

    test("should return 400 when upload fails", () => {
      req.params.id = 1;

      galleryService.uploadPhoto.mockImplementation(() => {
        throw new Error("Gallery not found");
      });

      uploadPhoto(req, res);

      expect(res.status).toHaveBeenCalledWith(400);

      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Gallery not found",
      });
    });
  });

  describe("getPhotosByGallery()", () => {
    test("should return gallery photos", () => {
      req.params.id = 1;

      galleryService.getPhotosByGallery.mockReturnValue([
        {
          id: 1,
          photoName: "photo1.jpg",
        },
      ]);

      getPhotosByGallery(req, res);

      expect(galleryService.getPhotosByGallery).toHaveBeenCalledWith(1);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("should return 404 when gallery not found", () => {
      req.params.id = 99;

      galleryService.getPhotosByGallery.mockImplementation(() => {
        throw new Error("Gallery not found");
      });

      getPhotosByGallery(req, res);

      expect(res.status).toHaveBeenCalledWith(404);

      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Gallery not found",
      });
    });
  });

  describe("deletePhoto()", () => {
    test("should delete photo successfully", () => {
      req.params.id = 1;

      galleryService.deletePhoto.mockReturnValue({
        id: 1,
      });

      deletePhoto(req, res);

      expect(galleryService.deletePhoto).toHaveBeenCalledWith(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {
          id: 1,
        },
      });
    });

    test("should return 404 when photo is not found", () => {
      req.params.id = 99;

      galleryService.deletePhoto.mockImplementation(() => {
        throw new Error("Photo not found");
      });

      deletePhoto(req, res);

      expect(res.status).toHaveBeenCalledWith(404);

      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Photo not found",
      });
    });
  });
});