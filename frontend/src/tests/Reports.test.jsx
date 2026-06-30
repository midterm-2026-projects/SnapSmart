import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import Reports from "../components/Reports";

afterEach(() => {
  cleanup();
});

describe("Reports Component", () => {
  it("should render correctly", () => {
    // Arrange
    render(
      <Reports
        reports={[
          {
            title: "Monthly Report",
            date: "June 2026",
            label1: "Bookings",
            value1: "12",
            label2: "Revenue",
            value2: "₱45,000",
          },
        ]}
      />
    );

    // Assert
    expect(screen.getByText("Generated Reports")).toBeTruthy();
    expect(screen.getByText("Monthly Report")).toBeTruthy();
    expect(screen.getByText("June 2026")).toBeTruthy();
  });

  it("should display report values", () => {
    // Arrange
    render(
      <Reports
        reports={[
          {
            title: "Revenue Report",
            date: "May 2026",
            label1: "Total Revenue",
            value1: "₱140,300",
            label2: "Growth",
            value2: "+12.5%",
          },
        ]}
      />
    );

    // Assert
    expect(screen.getByText("Revenue Report")).toBeTruthy();
    expect(screen.getByText("₱140,300")).toBeTruthy();
    expect(screen.getByText("+12.5%")).toBeTruthy();

    expect(screen.getByText("View")).toBeTruthy();
    expect(screen.getByText("Download")).toBeTruthy();
  });

  it("should display a message when no reports are available", () => {
    // Arrange
    render(<Reports reports={[]} />);

    // Assert
    expect(screen.getByText("No reports available.")).toBeTruthy();
  });
});