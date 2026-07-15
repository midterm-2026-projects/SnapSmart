import request from "supertest";
import app from "../app.js";

describe("Chatbot API", () => {
  test("should return chatbot response", async () => {
    const response = await request(app)
      .post("/api/chatbot")
      .send({
        message: "Hello",
      });

    expect(response.status).toBe(200);
    expect(response.body.response).toBeDefined();
  });

  test("should reject empty message", async () => {
    const response = await request(app)
      .post("/api/chatbot")
      .send({
        message: "",
      });

    expect(response.status).toBe(400);
  });
});