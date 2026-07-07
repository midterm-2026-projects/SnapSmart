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

import PackageSelection from "../components/PackageSelection";

describe("PackageSelection Component", () => {
  const selectedPackage = {
    name: "",
    price: "",
    description: "",
  };

  test("renders package cards correctly", () => {
    render(
      <PackageSelection
        selectedPackage={selectedPackage}
        setSelectedPackage={() => {}}
        onNext={() => {}}
      />
    );

    expect(
      screen.getByText("Package Selection")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Wedding Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Birthday Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Debut Package")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Baptism Package")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /continue/i,
      })
    ).toBeInTheDocument();
  });

  test("selects a package correctly", () => {
    const setSelectedPackage = vi.fn();

    render(
      <PackageSelection
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        onNext={() => {}}
      />
    );

    fireEvent.click(
      screen.getAllByRole("button", {
        name: /select package/i,
      })[0]
    );

    expect(setSelectedPackage).toHaveBeenCalled();
  });

  test("shows validation message when no package is selected", () => {
    render(
      <PackageSelection
        selectedPackage={selectedPackage}
        setSelectedPackage={() => {}}
        onNext={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /continue/i,
      })
    );

    expect(
      screen.getByText(
        "Please select a package."
      )
    ).toBeInTheDocument();
  });

  test("calls onNext after selecting package", () => {
    const onNext = vi.fn();

    render(
      <PackageSelection
        selectedPackage={{
          name: "Wedding Package",
          price: "₱15,000",
          description:
            "Complete Wedding Coverage",
        }}
        setSelectedPackage={() => {}}
        onNext={onNext}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /continue/i,
      })
    );

    expect(
      screen.getByText(
        "Package selected successfully!"
      )
    ).toBeInTheDocument();
  });
});