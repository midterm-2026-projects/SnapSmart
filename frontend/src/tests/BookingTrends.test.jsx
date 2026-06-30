import "@testing-library/jest-dom/vitest";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingTrends from "../components/BookingTrends";

describe("BookingTrends Component", () => {
  test("shows default message when no trend data exists", () => {
    // Arrange
    render(<BookingTrends />);

    // Assert
    expect(
      screen.getByText("No booking trend data available")
    ).toBeInTheDocument();
  });

  test("shows chart placeholder when data exists", () => {
    // Arrange
    render(<BookingTrends hasData={true} />);

    // Assert
    expect(
      screen.getByText("Chart Placeholder")
    ).toBeInTheDocument();
  });
});