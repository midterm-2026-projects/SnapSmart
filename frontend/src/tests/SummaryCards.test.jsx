import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SummaryCards from "../components/SummaryCards";

describe("SummaryCards Component", () => {
  test("displays data correctly", () => {
    render(<SummaryCards totalBookings={10} />);
    expect(screen.getByText("10")).toBeDefined();
  });
});