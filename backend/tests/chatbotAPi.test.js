import request from "supertest";
import { describe, test, expect } from "vitest";
import app from "../app.js";


describe("Chatbot API Integration Test",()=>{


test("POST /api/chatbot/message", async()=>{


    const response =
    await request(app)
    .post("/api/chatbot/message")
    .send({

        message:"hello"

    });



    expect(response.statusCode)
    .toBe(200);



    expect(response.body)
    .toHaveProperty(
        "botResponse"
    );


});



test("reject empty chatbot message", async()=>{


    const response =
    await request(app)
    .post("/api/chatbot/message")
    .send({

        message:""

    });



    expect(response.statusCode)
    .toBe(400);


});


});