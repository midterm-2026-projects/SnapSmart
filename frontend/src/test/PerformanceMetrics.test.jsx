import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import PerformanceMetrics from "../components/PerformanceMetrics";

describe("PerformanceMetrics Component", () => {
  test("renders component title", () => {
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion",
            value: 85,
          },
        ]}
      />
    );

    expect(
      screen.getByText("Performance Metrics")
    ).toBeInTheDocument();
  });

  test("renders metric title", () => {
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion",
            value: 85,
          },
        ]}
      />
    );

    expect(
      screen.getByText("Booking Completion")
    ).toBeInTheDocument();
  });

  test("renders metric percentage", () => {
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion",
            value: 85,
          },
        ]}
      />
    );

    expect(
      screen.getByText("85%")
    ).toBeInTheDocument();
  });

  test("renders progress bar", () => {
    render(
      <PerformanceMetrics
        metrics={[
          {
            title: "Booking Completion",
            value: 85,
          },
        ]}
      />
    );

    expect(
      screen.getByTestId("progress-bar-0")
    ).toBeInTheDocument();
  });

  test("shows empty state when metrics are empty", () => {
    render(<PerformanceMetrics metrics={[]} />);

    expect(
      screen.getByText("No performance data available")
    ).toBeInTheDocument();
  });
});