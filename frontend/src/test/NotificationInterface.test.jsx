import { render, screen } from "@testing-library/react";
import NotificationInterface from "../components/NotificationInterface.jsx";

test("NotificationInterface component renders correctly", () => {
  render(<NotificationInterface />);

  expect(
    screen.getByTestId("notification-interface")
  ).toBeInTheDocument();
});