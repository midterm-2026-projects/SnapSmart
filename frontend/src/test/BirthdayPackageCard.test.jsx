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

import BirthdayPackageCard from "../components/BirthdayPackageCard";

describe("BirthdayPackageCard Component", () => {
  test("renders birthday package details correctly", () => {
    render(
      <BirthdayPackageCard
        onSelect={() => {}}
      />
    );

    expect(
      screen.getByText("Birthday Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/₱10,000/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Birthday Event Coverage"
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
      <BirthdayPackageCard
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
      name: "Birthday Package",
      price: "₱10,000",
      description: "Birthday Event Coverage",
    });
  });
});