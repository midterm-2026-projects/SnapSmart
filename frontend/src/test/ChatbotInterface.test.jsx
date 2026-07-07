import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ChatbotInterface from "../components/ChatbotInterface";

describe("ChatbotInterface Component", () => {

  it("renders the chatbot interface", () => {
    render(<ChatbotInterface />);
    expect(screen.getByTestId("chatbot-interface")).toBeInTheDocument();
  });

  it("renders the chatbot heading", () => {
    render(<ChatbotInterface />);
    expect(
      screen.getByRole("heading", { name: /chatbot/i })
    ).toBeInTheDocument();
  });

  it("renders the message display component", () => {
    render(<ChatbotInterface />);
    expect(screen.getByTestId("message-display")).toBeInTheDocument();
  });

  it("renders the user input component", () => {
    render(<ChatbotInterface />);
    expect(screen.getByTestId("user-input")).toBeInTheDocument();
  });

});