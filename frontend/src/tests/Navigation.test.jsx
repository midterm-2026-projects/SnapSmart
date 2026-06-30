import "@testing-library/jest-dom/vitest";
import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Navigation from "../components/Navigation";

afterEach(() => {
  cleanup();
});

describe("Navigation Component", () => {
  test("renders navigation title", () => {
    render(<Navigation />);

    expect(
      screen.getByText("Navigation")
    ).toBeInTheDocument();
  });

  test("renders dashboard menu", () => {
    render(<Navigation />);

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();
  });
});