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

import DebutPackageCard from "../components/DebutPackageCard";

describe("DebutPackageCard Component", () => {
  test("renders debut package details correctly", () => {
    render(
      <DebutPackageCard
        onSelect={() => {}}
      />
    );

    expect(
      screen.getByText("Debut Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/₱12,000/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Complete Debut Coverage"
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
      <DebutPackageCard
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
      name: "Debut Package",
      price: "₱12,000",
      description: "Complete Debut Coverage",
    });
  });
});