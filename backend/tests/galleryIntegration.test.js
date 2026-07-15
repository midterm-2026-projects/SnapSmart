import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";

import app from "../app.js";
import { galleries } from "../models/galleryModel.js";

describe("Gallery API Integration Test", () => {
  beforeEach(() => {
    galleries.length = 0;
  });

  describe("POST /gallery", () => {
    test("should upload gallery successfully", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          eventType: "Wedding",
        });

      expect(response.status).toBe(201);

      expect(response.body.message).toBe(
        "Gallery uploaded successfully"
      );

      expect(response.body.data.clientName).toBe("Franklin");
      expect(response.body.data.imageName).toBe("wedding.jpg");

      expect(galleries.length).toBe(1);
    });
  });

  describe("GET /gallery/:id", () => {
    test("should return gallery by ID", async () => {
      await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          eventType: "Wedding",
        });

      const response = await request(app)
        .get("/gallery/1");

      expect(response.status).toBe(200);

      expect(response.body.message).toBe(
        "Gallery retrieved successfully"
      );

      expect(response.body.data.id).toBe(1);
      expect(response.body.data.clientName).toBe("Franklin");
    });

    test("should return 404 when gallery does not exist", async () => {
      const response = await request(app)
        .get("/gallery/99");

      expect(response.status).toBe(404);

      expect(response.body.message).toBe("Gallery not found");
    });
  });

  describe("DELETE /gallery/:id", () => {
    test("should delete gallery successfully", async () => {
      await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          eventType: "Wedding",
        });

      const response = await request(app)
        .delete("/gallery/1");

      expect(response.status).toBe(200);

      expect(response.body.message).toBe(
        "Gallery deleted successfully"
      );

      expect(response.body.data.id).toBe(1);

      expect(galleries.length).toBe(0);
    });

    test("should return 404 when gallery does not exist", async () => {
      const response = await request(app)
        .delete("/gallery/99");

      expect(response.status).toBe(404);

      expect(response.body.message).toBe("Gallery not found");
    });
  });
});