import request from "supertest";
import app from "../app.js";


describe("Chatbot API Integration Test", () => {


    test("POST /api/chatbot/message returns chatbot response", async () => {

        const response = await request(app)
            .post("/api/chatbot/message")
            .send({
                message: "Hello"
            });


        expect(response.statusCode)
            .toBe(200);


        expect(response.body)
            .toHaveProperty("botResponse");

    });



    test("POST /api/chatbot/message rejects empty message", async () => {

        const response = await request(app)
            .post("/api/chatbot/message")
            .send({
                message: ""
            });


        expect(response.statusCode)
            .toBe(400);

    });


});