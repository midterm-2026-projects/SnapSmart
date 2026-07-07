import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import RecentBookings from "../components/RecentBookings";

describe("RecentBookings Component", () => {
  test("renders table headers", () => {
    render(<RecentBookings bookings={[]} />);

    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  test("renders booking data", () => {
    const bookings = [
      {
        id: 1,
        client: "Juan Dela Cruz",
        date: "2026-05-01",
        status: "Completed",
        amount: "₱5000",
      },
    ];

    render(<RecentBookings bookings={bookings} />);

    expect(screen.getByText("Juan Dela Cruz")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("₱5000")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<RecentBookings bookings={[]} />);

    expect(screen.getByText("No bookings found")).toBeInTheDocument();
  });
});