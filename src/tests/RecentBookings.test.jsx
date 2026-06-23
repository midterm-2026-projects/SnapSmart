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
    ).toBeTruthy();
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

    expect(screen.getByText("Client")).toBeTruthy();
    expect(screen.getByText("Service")).toBeTruthy();
    expect(screen.getByText("Status")).toBeTruthy();
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

    expect(screen.getByText("Juan Dela Cruz")).toBeTruthy();
    expect(screen.getByText("Wedding Package")).toBeTruthy();
    expect(screen.getByText("Confirmed")).toBeTruthy();
  });
});