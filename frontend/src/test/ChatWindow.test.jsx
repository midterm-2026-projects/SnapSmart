import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatWindow from "../components/ChatWindow";

test("ChatWindow component displays conversations correctly", () => {
  render(
    <ChatWindow
      messages={[
        "Hello!",
        "How can I help you today?",
        "I'd like to book a session.",
      ]}
    />
  );

  expect(screen.getByText("Hello!")).toBeInTheDocument();
  expect(screen.getByText("How can I help you today?")).toBeInTheDocument();
  expect(
    screen.getByText("I'd like to book a session.")
  ).toBeInTheDocument();
});