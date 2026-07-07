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

import BookingActionButton from "../components/BookingActionButton";

describe("BookingActionButton Component", () => {
  test("renders button correctly", () => {
    render(
      <BookingActionButton
        label="Confirm Booking"
        onAction={() => {}}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    ).toBeInTheDocument();
  });

  test("calls action when button is clicked", () => {
    const onAction = vi.fn();

    render(
      <BookingActionButton
        label="Confirm Booking"
        onAction={onAction}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    );

    expect(onAction).toHaveBeenCalled();
  });

  test("shows success message after clicking button", () => {
    render(
      <BookingActionButton
        label="Confirm Booking"
        onAction={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    );

    expect(
      screen.getByText(
        "Booking Confirmed Successfully!"
      )
    ).toBeInTheDocument();
  });
});