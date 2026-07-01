import { render, screen, fireEvent } from "@testing-library/react";
import UserInput from "../components/UserInput.jsx";

test("UserInput component accepts valid input correctly", () => {
  const mockSend = vi.fn();

  render(<UserInput onSend={mockSend} />);

  const input = screen.getByTestId("user-input");
  const button = screen.getByTestId("send-button");

  fireEvent.change(input, { target: { value: "Hello" } });
  fireEvent.click(button);

  expect(mockSend).toHaveBeenCalledWith("Hello");
});