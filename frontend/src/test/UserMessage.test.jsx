import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserMessage from "../components/UserMessage";

describe("UserMessage Component", () => {
  test("renders user message correctly", () => {
    render(<UserMessage message="Hello!" />);

    expect(screen.getByTestId("user-message")).toBeInTheDocument();
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  test("displays different user messages", () => {
    render(<UserMessage message="Testing React" />);

    expect(screen.getByText("Testing React")).toBeInTheDocument();
  });

  test("has the correct CSS class", () => {
    render(<UserMessage message="Sample" />);

    expect(screen.getByTestId("user-message")).toHaveClass("user-message");
  });
});