import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypingIndicator from "../components/TypingIndicator";

describe("TypingIndicator Component", () => {
  test("appears while waiting for responses", () => {
    render(<TypingIndicator isTyping={true} />);

    expect(screen.getByTestId("typing-indicator")).toBeInTheDocument();
    expect(screen.getByText("Bot is typing...")).toBeInTheDocument();
  });

  test("does not appear when not waiting", () => {
    render(<TypingIndicator isTyping={false} />);

    expect(screen.queryByTestId("typing-indicator")).not.toBeInTheDocument();
  });

  test("shows the correct typing text", () => {
    render(<TypingIndicator isTyping={true} />);

    expect(screen.getByText("Bot is typing...")).toBeVisible();
  });
});