import { render, screen } from "@testing-library/react";
import MessageDisplay from "../components/MessageDisplay.jsx";

test("MessageDisplay component displays messages correctly", () => {
  render(
    <MessageDisplay
      messages={[
        { sender: "User", text: "Hello" },
        { sender: "Bot", text: "Hi!" },
      ]}
    />
  );

  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  expect(screen.getByText(/Hi!/i)).toBeInTheDocument();
});