import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FinancialSummary from "../components/FinancialSummary";

describe("FinancialSummary Component", () => {
  test("shows default message when no financial data exists", () => {
    render(<FinancialSummary />);

    expect(
      screen.getByText("No financial data available")
    ).toBeTruthy();
  });

  test("shows financial data when data exists", () => {
    render(
      <FinancialSummary thisMonth={12500} />
    );

    expect(
      screen.getByText("This Month: ₱12500")
    ).toBeTruthy();
  });
});