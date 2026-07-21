import { describe, test, expect } from "vitest";
import { getChatbotResponse } from "../services/chatbotService.js";


describe("Chatbot Service", () => {


    test("returns AI generated response", async () => {

        const response =
            await getChatbotResponse("Hello");


        expect(response)
            .toBeDefined();


        expect(typeof response)
            .toBe("string");


        expect(response.length)
            .toBeGreaterThan(0);

    });


});