import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatHeader from "../components/ChatHeader";

test("ChatHeader component renders correctly", () => {
  render(<ChatHeader />);

  expect(screen.getByTestId("chat-header")).toBeInTheDocument();
  expect(screen.getByText("SnapSmart AI Chatbot")).toBeInTheDocument();
});