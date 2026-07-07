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

import PackageBooking from "../components/PackageBooking";

describe("PackageBooking Component", () => {
  test("renders package booking title", () => {
    render(<PackageBooking />);

    expect(
      screen.getByRole("heading", {
        name: /package booking/i,
      })
    ).toBeInTheDocument();
  });

  test("renders all available packages", () => {
    render(<PackageBooking />);

    expect(
      screen.getAllByRole("button", {
        name: /select package/i,
      })
    ).toHaveLength(4);
  });

  test("renders continue button", () => {
    render(<PackageBooking />);

    expect(
      screen.getByRole("button", {
        name: /continue/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation message when no package is selected", () => {
    render(<PackageBooking />);

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

  test("selects a package successfully", () => {
    render(<PackageBooking />);

    fireEvent.click(
      screen.getAllByRole("button", {
        name: /select package/i,
      })[0]
    );

    expect(
      screen.getByText(/Selected Package:/i)
    ).toBeInTheDocument();
  });

  test("shows success message after clicking continue", () => {
    render(<PackageBooking />);

    fireEvent.click(
      screen.getAllByRole("button", {
        name: /select package/i,
      })[0]
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

  test("calls onNext after selecting a package", () => {
    const onNext = vi.fn();

    render(
      <PackageBooking
        onNext={onNext}
      />
    );

    fireEvent.click(
      screen.getAllByRole("button", {
        name: /select package/i,
      })[0]
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /continue/i,
      })
    );

    expect(onNext).toHaveBeenCalledTimes(1);
  });
});