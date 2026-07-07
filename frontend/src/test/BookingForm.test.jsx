import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
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
});