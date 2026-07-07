import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NotificationList from "../components/NotificationList";

describe("NotificationList Component", () => {

  const notifications = [
    {
      id: 1,
      title: "Message Received",
      message: "You have a new message.",
      date: "Today",
    },
    {
      id: 2,
      title: "Task Completed",
      message: "Your task is finished.",
      date: "Yesterday",
    },
  ];


  test("renders notification list", () => {
    render(
      <NotificationList notifications={notifications} />
    );

    expect(
      screen.getByTestId("notification-list")
    ).toBeInTheDocument();
  });


  test("displays notifications correctly", () => {
    render(
      <NotificationList notifications={notifications} />
    );

    expect(
      screen.getByText("Message Received")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Task Completed")
    ).toBeInTheDocument();
  });


  test("renders multiple notification cards", () => {
    render(
      <NotificationList notifications={notifications} />
    );

    const cards = screen.getAllByTestId(
      "notification-card"
    );

    expect(cards).toHaveLength(2);
  });

});