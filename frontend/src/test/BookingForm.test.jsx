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

  test("shows error message when all fields are empty", () => {
    render(<BookingForm />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete all required fields."
      )
    ).toBeInTheDocument();
  });

  test("shows error message when some fields are missing", () => {
    render(<BookingForm />);

    fireEvent.change(
      screen.getByPlaceholderText("Full Name"),
      {
        target: {
          value: "Juan Dela Cruz",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      {
        target: {
          value: "juan@gmail.com",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Contact Number"),
      {
        target: {
          value: "09123456789",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm booking/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete all required fields before confirming your booking."
      )
    ).toBeInTheDocument();
  });

  test("shows success message when all fields are complete", () => {
    render(<BookingForm />);

    fireEvent.change(
      screen.getByPlaceholderText("Full Name"),
      {
        target: {
          value: "Juan Dela Cruz",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      {
        target: {
          value: "juan@gmail.com",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Contact Number"),
      {
        target: {
          value: "09123456789",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Event Type"),
      {
        target: {
          value: "Wedding",
        },
      }
    );

    const dateInput = document.querySelector(
      'input[type="date"]'
    );

    fireEvent.change(dateInput, {
      target: {
        value: "2026-08-01",
      },
    });

    fireEvent.change(
      screen.getByPlaceholderText("Venue"),
      {
        target: {
          value: "Quezon City",
        },
      }
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