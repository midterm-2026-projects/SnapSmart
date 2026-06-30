import "@testing-library/jest-dom/vitest";
import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import RecentBookings from "../components/RecentBookings";

afterEach(() => {
  cleanup();
});

describe("RecentBookings Component", () => {
  test("shows default message when no bookings exist", () => {
    render(<RecentBookings />);

    expect(
      screen.getByText("No bookings available")
    ).toBeInTheDocument();
  });

  test("displays booking table columns correctly", () => {
    render(
      <RecentBookings
        bookings={[
          {
            client: "Juan Dela Cruz",
            service: "Wedding Package",
            status: "Confirmed",
          },
        ]}
      />
    );

    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Service")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  test("displays booking data correctly", () => {
    render(
      <RecentBookings
        bookings={[
          {
            client: "Juan Dela Cruz",
            service: "Wedding Package",
            status: "Confirmed",
          },
        ]}
      />
    );

    expect(screen.getByText("Juan Dela Cruz")).toBeInTheDocument();
    expect(screen.getByText("Wedding Package")).toBeInTheDocument();
    expect(screen.getByText("Confirmed")).toBeInTheDocument();
  });
});