import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import FinancialSummaryCard from "../components/FinancialSummaryCard";

describe("FinancialSummaryCard Component", () => {
  test("renders title and value", () => {
    render(
      <FinancialSummaryCard
        title="Total Revenue"
        value="₱120,000"
      />
    );

    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("₱120,000")).toBeInTheDocument();
  });

  test("shows empty state when value is missing", () => {
    render(
      <FinancialSummaryCard
        title="Total Revenue"
      />
    );

    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});