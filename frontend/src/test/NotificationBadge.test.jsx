import { render, screen } from "@testing-library/react";
import NotificationBadge from "../components/NotificationBadge.jsx";

test("NotificationBadge component updates correctly", () => {
  render(<NotificationBadge count={5} />);

  expect(screen.getByTestId("notification-badge")).toHaveTextContent("5");
});