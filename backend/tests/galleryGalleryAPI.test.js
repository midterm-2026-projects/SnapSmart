import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";

import app from "../app.js";
import { galleries } from "../models/galleryModel.js";

describe("Gallery API", () => {
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
          fileSize: 500,
        });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Gallery uploaded successfully");

      expect(response.body.data.clientName).toBe("Franklin");
      expect(response.body.data.imageName).toBe("wedding.jpg");
      expect(response.body.data.eventType).toBe("Wedding");

      expect(galleries.length).toBe(1);
    });

    test("should upload gallery when file size is within 500 MB", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "portrait.jpg",
          eventType: "Birthday",
          fileSize: 500,
        });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Gallery uploaded successfully");
    });

    test("should return 400 when file size exceeds 500 MB", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "video.mp4",
          eventType: "Wedding",
          fileSize: 1024,
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "File size exceeds the 500 MB limit"
      );
    });

    test("should return 400 when client name is missing", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          imageName: "wedding.jpg",
          eventType: "Wedding",
          fileSize: 200,
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Client Name is required");
    });

    test("should return 400 when image name is missing", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          eventType: "Wedding",
          fileSize: 200,
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Image Name is required");
    });

    test("should return 400 when event type is missing", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({
          clientName: "Franklin",
          imageName: "wedding.jpg",
          fileSize: 200,
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Event Type is required");
    });

    test("should return 400 when request body is empty", async () => {
      const response = await request(app)
        .post("/gallery")
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Client Name is required");
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
          fileSize: 300,
        });

      const response = await request(app).get("/gallery/1");

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Gallery retrieved successfully"
      );

      expect(response.body.data.id).toBe(1);
      expect(response.body.data.clientName).toBe("Franklin");
      expect(response.body.data.imageName).toBe("wedding.jpg");
      expect(response.body.data.eventType).toBe("Wedding");
    });

    test("should return 404 when gallery does not exist", async () => {
      const response = await request(app).get("/gallery/99");

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
          fileSize: 300,
        });

      const response = await request(app).delete("/gallery/1");

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Gallery deleted successfully"
      );

      expect(response.body.data.id).toBe(1);
      expect(galleries.length).toBe(0);
    });

    test("should return 404 when gallery does not exist", async () => {
      const response = await request(app).delete("/gallery/99");

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Gallery not found");
    });
  });
});