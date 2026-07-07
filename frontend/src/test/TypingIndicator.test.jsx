import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TypingIndicator from "../components/TypingIndicator";

describe("TypingIndicator Component", () => {
  test("renders when isTyping is true", () => {
    render(<TypingIndicator isTyping={true} />);

    expect(screen.getByTestId("typing-indicator")).toBeInTheDocument();
  });

  test("displays the typing message", () => {
    render(<TypingIndicator isTyping={true} />);

    expect(screen.getByText("Bot is typing...")).toBeInTheDocument();
  });

  test("has the correct role", () => {
    render(<TypingIndicator isTyping={true} />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("does not render when isTyping is false", () => {
    render(<TypingIndicator isTyping={false} />);

    expect(screen.queryByTestId("typing-indicator")).not.toBeInTheDocument();
  });
});