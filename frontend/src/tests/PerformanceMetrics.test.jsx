import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import PerformanceMetrics from "../components/PerformanceMetrics";

afterEach(() => {
  cleanup();
});

describe("PerformanceMetrics Component", () => {
  it("should render correctly", () => {
    // Arrange
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion Rate",
            value: 85,
          },
        ]}
      />
    );

    // Assert
    expect(screen.getByText("Performance Metrics")).toBeTruthy();
    expect(screen.getByText("Booking Completion Rate")).toBeTruthy();
  });

  it("should display percentage values", () => {
    // Arrange
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion Rate",
            value: 85,
          },
          {
            title: "Customer Satisfaction",
            value: 92,
          },
          {
            title: "Revenue Growth",
            value: 68,
          },
          {
            title: "Service Quality Score",
            value: 88,
          },
        ]}
      />
    );

    // Assert
    expect(screen.getByText("85%")).toBeTruthy();
    expect(screen.getByText("92%")).toBeTruthy();
    expect(screen.getByText("68%")).toBeTruthy();
    expect(screen.getByText("88%")).toBeTruthy();

    expect(screen.getAllByTestId("performance-metric")).toHaveLength(4);
  });

  it("should display a message when no metrics are available", () => {
    // Arrange
    render(<PerformanceMetrics metrics={[]} />);

    // Assert
    expect(
      screen.getByText("No performance metrics available.")
    ).toBeTruthy();
  });
});