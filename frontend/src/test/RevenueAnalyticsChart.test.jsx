import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import RevenueAnalyticsChart from "../components/RevenueAnalyticsChart";

describe("RevenueAnalyticsChart Component", () => {

  test("renders component title", () => {
    render(
      <RevenueAnalyticsChart
        data={[
          {
            month: "January",
            revenue: 25000,
          },
        ]}
      />
    );

    expect(
      screen.getByText("Revenue Analytics")
    ).toBeInTheDocument();
  });

  test("renders month label", () => {
    render(
      <RevenueAnalyticsChart
        data={[
          {
            month: "January",
            revenue: 25000,
          },
        ]}
      />
    );

    expect(
      screen.getByText("January")
    ).toBeInTheDocument();
  });

  test("renders revenue amount", () => {
    render(
      <RevenueAnalyticsChart
        data={[
          {
            month: "January",
            revenue: 25000,
          },
        ]}
      />
    );

    expect(
      screen.getByText("₱25,000")
    ).toBeInTheDocument();
  });

  test("renders chart bar", () => {
    render(
      <RevenueAnalyticsChart
        data={[
          {
            month: "January",
            revenue: 25000,
          },
        ]}
      />
    );

    expect(
      screen.getByTestId("chart-bar-0")
    ).toBeInTheDocument();
  });

  test("shows empty state when no analytics data exists", () => {
    render(
      <RevenueAnalyticsChart data={[]} />
    );

    expect(
      screen.getByText("No analytics data available")
    ).toBeInTheDocument();
  });

});