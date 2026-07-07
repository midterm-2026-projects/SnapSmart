import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BotMessage from "../components/BotMessage";

describe("BotMessage Component", () => {
  test("renders bot message correctly", () => {
    render(<BotMessage message="Hello from the bot!" />);

    expect(screen.getByTestId("bot-message")).toBeInTheDocument();
    expect(screen.getByText("Hello from the bot!")).toBeInTheDocument();
  });

  test("displays different bot messages", () => {
    render(<BotMessage message="How can I help you?" />);

    expect(screen.getByText("How can I help you?")).toBeInTheDocument();
  });

  test("has the correct CSS class", () => {
    render(<BotMessage message="Test" />);

    expect(screen.getByTestId("bot-message")).toHaveClass("bot-message");
  });
});