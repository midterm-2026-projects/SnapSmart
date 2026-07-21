import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";

import app from "../app.js";
import { galleries } from "../models/galleryModel.js";

describe("Photo Management API Integration Test", () => {

  beforeEach(() => {
    galleries.length = 0;
  });

  describe("POST /gallery/:id/photos", () => {

    test("should upload photo successfully", async () => {

      const gallery = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "cover.jpg",
          eventType: "Wedding",
          fileSize: 100,
        });

      const response = await request(app)
        .post(`/gallery/${gallery.body.data.id}/photos`)
        .send({
          photoName: "photo1.jpg",
          fileSize: 120,
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.photoName).toBe("photo1.jpg");

    });

    test("should reject upload when gallery does not exist", async () => {

      const response = await request(app)
        .post("/gallery/999/photos")
        .send({
          photoName: "photo1.jpg",
          fileSize: 120,
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);

    });

  });

  describe("GET /gallery/:id/photos", () => {

    test("should return gallery photos", async () => {

      const gallery = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "cover.jpg",
          eventType: "Wedding",
          fileSize: 100,
        });

      await request(app)
        .post(`/gallery/${gallery.body.data.id}/photos`)
        .send({
          photoName: "photo1.jpg",
          fileSize: 120,
        });

      const response = await request(app)
        .get(`/gallery/${gallery.body.data.id}/photos`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBe(1);

    });

  });

  describe("DELETE /photos/:id", () => {

    test("should delete photo successfully", async () => {

      const gallery = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "cover.jpg",
          eventType: "Wedding",
          fileSize: 100,
        });

      const upload = await request(app)
        .post(`/gallery/${gallery.body.data.id}/photos`)
        .send({
          photoName: "photo1.jpg",
          fileSize: 120,
        });

      const response = await request(app)
        .delete(`/photos/${upload.body.data.id}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);

    });

    test("should return 404 when photo does not exist", async () => {

      const response = await request(app)
        .delete("/photos/999");

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Photo not found");

    });

  });

});