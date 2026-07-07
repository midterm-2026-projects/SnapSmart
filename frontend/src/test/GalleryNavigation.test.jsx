import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import GalleryNavigation from "../components/GalleryNavigation";


describe("GalleryNavigation Component", () => {
  test("renders navigation buttons", () => {
    render(
      <GalleryNavigation
        onPrevious={() => {}}
        onNext={() => {}}
      />
    );

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

  test("calls previous button function", () => {
    const onPrevious = vi.fn();

    render(
      <GalleryNavigation
        onPrevious={onPrevious}
        onNext={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /previous/i,
      })
    );

    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  test("calls next button function", () => {
    const onNext = vi.fn();

    render(
      <GalleryNavigation
        onPrevious={() => {}}
        onNext={onNext}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /next/i,
      })
    );

    expect(onNext).toHaveBeenCalledTimes(1);
  });
});