import { render, screen } from "@testing-library/react";
import ChatbotInterface from "../components/ChatbotInterface.jsx";

test("ChatbotInterface component renders correctly", () => {
  render(<ChatbotInterface />);
  expect(screen.getByTestId("chatbot-interface")).toBeInTheDocument();
});