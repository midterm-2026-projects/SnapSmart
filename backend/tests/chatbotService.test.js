import { describe, test, expect } from "vitest";
import chatbotService from "../services/chatbotService.js";


describe("Chatbot Service Unit Test",()=>{


test("returns chatbot response for hello message", async()=>{


    const response =
    await chatbotService.getChatbotResponse(
        "hello"
    );


    expect(response)
    .toContain(
        "AI photography assistant"
    );


});



test("rejects empty message", async()=>{


    await expect(

        chatbotService.getChatbotResponse("")

    )
    .rejects
    .toThrow(
        "Message cannot be empty"
    );


});



test("validates user message",()=>{


    expect(
        chatbotService.validateUserMessage("hello")
    )
    .toBe(true);



    expect(
        chatbotService.validateUserMessage("")
    )
    .toBe(false);


});


});