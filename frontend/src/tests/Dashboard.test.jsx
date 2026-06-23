import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

describe("Dashboard Component", () => {
  test("renders dashboard correctly", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeDefined();
  });
});