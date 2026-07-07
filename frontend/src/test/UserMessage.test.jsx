import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserMessage from "../components/UserMessage";

describe("UserMessage Component", () => {
  test("renders without crashing", () => {
    render(<UserMessage message="Hi Bot!" />);

    expect(screen.getByTestId("user-message")).toBeInTheDocument();
  });

  test("displays the user message correctly", () => {
    render(<UserMessage message="Hello there!" />);

    expect(
      screen.getByText("Hello there!")
    ).toBeInTheDocument();
  });

  test("has the correct role", () => {
    render(<UserMessage message="Role test" />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});