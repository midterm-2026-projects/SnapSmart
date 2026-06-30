import "@testing-library/jest-dom/vitest";
import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import SummaryCards from "../components/SummaryCards";

afterEach(() => {
  cleanup();
});

describe("SummaryCards Component", () => {
  test("shows default booking value when no data exists", () => {
    render(<SummaryCards />);

    expect(
      screen.getByText("Total Bookings: 0")
    ).toBeInTheDocument();
  });

  test("shows booking value when data exists", () => {
    render(
      <SummaryCards bookings={24} />
    );

    expect(
      screen.getByText("Total Bookings: 24")
    ).toBeInTheDocument();
  });
});