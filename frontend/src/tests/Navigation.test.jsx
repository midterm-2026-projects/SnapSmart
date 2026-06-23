import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation Component", () => {
  test("functions correctly", () => {
    render(<Navigation />);
    expect(screen.getByText("Dashboard")).toBeDefined();
  });
});