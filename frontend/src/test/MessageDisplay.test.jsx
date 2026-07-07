import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MessageDisplay from "../components/MessageDisplay";

describe("MessageDisplay Component", () => {
  const messages = [
    { sender: "User", text: "Hello" },
    { sender: "Bot", text: "Hi!" },
  ];

  it("renders the message display component", () => {
    render(<MessageDisplay messages={messages} />);

    expect(screen.getByTestId("message-display")).toBeInTheDocument();
  });

  it("displays all messages correctly", () => {
    render(<MessageDisplay messages={messages} />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hi!")).toBeInTheDocument();
  });

  it("displays the sender names", () => {
    render(<MessageDisplay messages={messages} />);

    expect(screen.getByText(/User/i)).toBeInTheDocument();
    expect(screen.getByText(/Bot/i)).toBeInTheDocument();
  });

  it("renders the correct number of messages", () => {
    render(<MessageDisplay messages={messages} />);

    expect(screen.getAllByTestId("message-item")).toHaveLength(2);
  });

  it("renders no messages when the list is empty", () => {
    render(<MessageDisplay messages={[]} />);

    expect(screen.queryByTestId("message-item")).not.toBeInTheDocument();
  });
});