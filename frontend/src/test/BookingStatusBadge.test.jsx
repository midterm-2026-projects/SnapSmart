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
} from "vitest";

import BookingStatusBadge from "../components/BookingStatusBadge";

describe("BookingStatusBadge Component", () => {
  test("renders booking status correctly", () => {
    render(
      <BookingStatusBadge
        status="Pending"
      />
    );

    expect(
      screen.getByText(/pending/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /change status/i,
      })
    ).toBeInTheDocument();
  });

  test("changes booking status", () => {
    render(
      <BookingStatusBadge
        status="Pending"
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /change status/i,
      })
    );

    expect(
      screen.getByText(/confirmed/i)
    ).toBeInTheDocument();
  });

  test("changes status back to pending", () => {
    render(
      <BookingStatusBadge
        status="Pending"
      />
    );

    const button = screen.getByRole("button", {
      name: /change status/i,
    });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(
      screen.getByText(/pending/i)
    ).toBeInTheDocument();
  });
});