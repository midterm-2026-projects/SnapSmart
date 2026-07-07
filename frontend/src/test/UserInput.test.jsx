import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserInput from "../components/UserInput";

describe("UserInput Component", () => {
  it("renders the input field and send button", () => {
    render(<UserInput onSend={vi.fn()} />);

    expect(screen.getByTestId("user-input")).toBeInTheDocument();
    expect(screen.getByTestId("send-button")).toBeInTheDocument();
  });

  it("accepts user input correctly", () => {
    render(<UserInput onSend={vi.fn()} />);

    const input = screen.getByTestId("user-input");

    fireEvent.change(input, {
      target: { value: "Hello" },
    });

    expect(input.value).toBe("Hello");
  });

  it("calls onSend when the send button is clicked", () => {
    const mockSend = vi.fn();

    render(<UserInput onSend={mockSend} />);

    const input = screen.getByTestId("user-input");
    const button = screen.getByTestId("send-button");

    fireEvent.change(input, {
      target: { value: "Hello" },
    });

    fireEvent.click(button);

    expect(mockSend).toHaveBeenCalledWith("Hello");
    expect(mockSend).toHaveBeenCalledTimes(1);
  });

  it("does not call onSend when the input is empty", () => {
    const mockSend = vi.fn();

    render(<UserInput onSend={mockSend} />);

    const button = screen.getByTestId("send-button");

    fireEvent.click(button);

    expect(mockSend).not.toHaveBeenCalled();
  });
});