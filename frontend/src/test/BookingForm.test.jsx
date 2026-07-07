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

import BookingForm from "../components/BookingForm";

describe("BookingForm Component", () => {
  test("renders booking form title", () => {
    render(<BookingForm />);

    expect(
      screen.getByText("Booking Form")
    ).toBeInTheDocument();
  });

  test("renders client information section", () => {
    render(<BookingForm />);

    expect(
      screen.getByText("Client Information")
    ).toBeInTheDocument();
  });

  test("renders event information section", () => {
    render(<BookingForm />);

    expect(
      screen.getByText("Event Information")
    ).toBeInTheDocument();
  });

  test("renders confirm booking button", () => {
    render(<BookingForm />);

    expect(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    ).toBeInTheDocument();
  });

  test("shows success message after clicking confirm booking button", () => {
    render(<BookingForm />);

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