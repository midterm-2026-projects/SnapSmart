import {
  getChatbotResponse,
  searchResponseByKeyword,
  validateUserMessage,
} from "../services/chatbotService.js";

describe("Chatbot Response Unit Tests", () => {
  test("getChatbotResponse() returns the correct response for hello", () => {
    expect(getChatbotResponse("hello")).toBe(
      "Hello! How can I help you today?"
    );
  });

  test("getChatbotResponse() returns booking response", () => {
    expect(getChatbotResponse("I want to book")).toBe(
      "You can book a photography session through our booking page."
    );
  });

  test("getChatbotResponse() returns default response for unknown message", () => {
    expect(getChatbotResponse("banana")).toBe(
      "Sorry, I couldn't understand your message."
    );
  });

  test("getChatbotResponse() returns invalid message for empty input", () => {
    expect(getChatbotResponse("")).toBe("Invalid message.");
  });
});

describe("Keyword Search Unit Tests", () => {
  test("searchResponseByKeyword() finds matching keyword", () => {
    const result = searchResponseByKeyword("booking");

    expect(result).not.toBeNull();
    expect(result.response).toBe(
      "You can book a photography session through our booking page."
    );
  });

  test("searchResponseByKeyword() returns null if keyword does not exist", () => {
    expect(searchResponseByKeyword("pizza")).toBeNull();
  });

  test("searchResponseByKeyword() ignores letter case", () => {
    const result = searchResponseByKeyword("HELLO");

    expect(result).not.toBeNull();
    expect(result.response).toBe(
      "Hello! How can I help you today?"
    );
  });
});

describe("Message Validation Unit Tests", () => {
  test("validateUserMessage() accepts valid input", () => {
    expect(validateUserMessage("Hello")).toBe(true);
  });

  test("validateUserMessage() rejects empty string", () => {
    expect(validateUserMessage("")).toBe(false);
  });

  test("validateUserMessage() rejects whitespace only", () => {
    expect(validateUserMessage("      ")).toBe(false);
  });

  test("validateUserMessage() rejects null", () => {
    expect(validateUserMessage(null)).toBe(false);
  });

  test("validateUserMessage() rejects undefined", () => {
    expect(validateUserMessage(undefined)).toBe(false);
  });

  test("validateUserMessage() rejects numbers", () => {
    expect(validateUserMessage(12345)).toBe(false);
  });
});