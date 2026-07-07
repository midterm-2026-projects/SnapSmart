import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BotMessage from "../components/BotMessage";

describe("BotMessage Component", () => {
  test("renders without crashing", () => {
    render(<BotMessage message="Hello!" />);

    expect(screen.getByTestId("bot-message")).toBeInTheDocument();
  });

  test("displays the bot message correctly", () => {
    render(<BotMessage message="Welcome to SnapSmart!" />);

    expect(
      screen.getByText("Welcome to SnapSmart!")
    ).toBeInTheDocument();
  });

  test("has the correct role", () => {
    render(<BotMessage message="Testing role" />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});