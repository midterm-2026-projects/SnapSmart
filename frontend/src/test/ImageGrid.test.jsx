import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ImageGrid from "../components/ImageGrid";


describe("ImageGrid Component", () => {
  test("renders images correctly", () => {
    render(<ImageGrid />);

    expect(
      screen.getByAltText("Gallery Image 1")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Gallery Image 2")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Gallery Image 3")
    ).toBeInTheDocument();
  });

  test("renders three images", () => {
    render(<ImageGrid />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);
  });
});