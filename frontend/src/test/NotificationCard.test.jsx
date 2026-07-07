import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NotificationCard from "../components/NotificationCard";

describe("NotificationCard Component", () => {
  const notification = {
    title: "New Update",
    message: "Your report is ready.",
    date: "2026-01-01",
  };

  test("renders notification card", () => {
    render(
      <NotificationCard notification={notification} />
    );

    expect(
      screen.getByTestId("notification-card")
    ).toBeInTheDocument();
  });


  test("displays notification title correctly", () => {
    render(
      <NotificationCard notification={notification} />
    );

    expect(
      screen.getByText("New Update")
    ).toBeInTheDocument();
  });


  test("displays notification details correctly", () => {
    render(
      <NotificationCard notification={notification} />
    );

    expect(
      screen.getByText("Your report is ready.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("2026-01-01")
    ).toBeInTheDocument();
  });
});