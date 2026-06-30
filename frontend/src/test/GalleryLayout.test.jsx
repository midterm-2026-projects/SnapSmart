import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import GalleryLayout from "../components/GalleryLayout";

describe("GalleryLayout Component", () => {
  test("renders gallery layout correctly", () => {
    render(<GalleryLayout />);

    expect(
      screen.getByText("Gallery")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /previous/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /next/i,
      })
    ).toBeInTheDocument();
  });
});