import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BookingStatistics from "../components/BookingStatistics";

describe("BookingStatistics Component", () => {
  it("should render correctly", () => {
    // Arrange
    render(
      <BookingStatistics
        title="Average Booking Value"
        value="₱3,750"
        subtitle="Per Booking"
      />
    );

    // Assert
    expect(screen.getByTestId("booking-statistics-card")).toBeTruthy();
    expect(screen.getByText("Average Booking Value")).toBeTruthy();
    expect(screen.getByText("₱3,750")).toBeTruthy();
    expect(screen.getByText("Per Booking")).toBeTruthy();
  });

  it("should display the provided value", () => {
    // Arrange
    render(
      <BookingStatistics
        title="Total Clients"
        value="35"
        subtitle="This Year"
      />
    );

    // Assert
    expect(screen.getByText("35")).toBeTruthy();
    expect(screen.getByText("Total Clients")).toBeTruthy();
  });

  it("should display 0 when no value is provided", () => {
    // Arrange
    render(
      <BookingStatistics
        title="Repeat Client Rate"
        subtitle="Returning Clients"
      />
    );

    // Assert
    expect(screen.getByText("0")).toBeTruthy();
    expect(screen.getByText("Repeat Client Rate")).toBeTruthy();
  });
});