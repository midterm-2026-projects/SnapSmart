import {
  getChatbotResponse,
  validateUserMessage,
} from "../services/chatbotService.js";

describe("Chatbot Service", () => {
  test("returns greeting", async () => {
    const response = await getChatbotResponse("Hello");

    expect(response).toContain("Hello");
  });

  test("validates message", () => {
    expect(validateUserMessage("Hi")).toBe(true);
    expect(validateUserMessage("")).toBe(false);
  });

  test("returns booking response", async () => {
    const response = await getChatbotResponse("booking");

    expect(response).toContain("book");
  });
});