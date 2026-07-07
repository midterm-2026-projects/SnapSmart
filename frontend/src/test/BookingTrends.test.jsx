import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import BookingTrends from "../components/BookingTrends";

describe("BookingTrends Component", () => {
  test("renders booking data", () => {
    const data = [
      { month: "January", bookings: 20 },
      { month: "February", bookings: 15 },
    ];

    render(<BookingTrends data={data} />);

    expect(screen.getByText("January - 20")).toBeInTheDocument();
    expect(screen.getByText("February - 15")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<BookingTrends data={[]} />);

    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});