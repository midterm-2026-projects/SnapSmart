import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingTrends from "../components/BookingTrends";

describe("BookingTrends Component", () => {
  test("shows default message when no trend data exists", () => {
    render(<BookingTrends />);

    expect(
      screen.getByText("No booking trend data available")
    ).toBeTruthy();
  });

  test("shows chart placeholder when data exists", () => {
    render(<BookingTrends hasData={true} />);

    expect(
      screen.getByText("Chart Placeholder")
    ).toBeTruthy();
  });
});