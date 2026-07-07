import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi,
} from "vitest";

import WeddingPackageCard from "../components/WeddingPackageCard";

describe("WeddingPackageCard Component", () => {
  test("renders wedding package details correctly", () => {
    render(
      <WeddingPackageCard
        onSelect={() => {}}
      />
    );

    expect(
      screen.getByText("Wedding Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/₱15,000/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Complete Wedding Coverage"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /select package/i,
      })
    ).toBeInTheDocument();
  });

  test("calls onSelect when button is clicked", () => {
    const onSelect = vi.fn();

    render(
      <WeddingPackageCard
        onSelect={onSelect}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /select package/i,
      })
    );

    expect(onSelect).toHaveBeenCalledTimes(1);

    expect(onSelect).toHaveBeenCalledWith({
      name: "Wedding Package",
      price: "₱15,000",
      description: "Complete Wedding Coverage",
    });
  });
});