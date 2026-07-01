import { render, screen } from "@testing-library/react";
import NotificationList from "../components/NotificationList.jsx";

test("NotificationList component displays notifications correctly", () => {
  const notifications = [
    "Booking confirmed",
    "New message received",
    "Reminder: Event tomorrow",
  ];

  render(<NotificationList notifications={notifications} />);

  expect(screen.getByText("Booking confirmed")).toBeInTheDocument();
  expect(screen.getByText("New message received")).toBeInTheDocument();
  expect(screen.getByText("Reminder: Event tomorrow")).toBeInTheDocument();
});