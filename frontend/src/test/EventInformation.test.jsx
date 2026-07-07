import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import EventInformation from "../components/EventInformation";

describe("EventInformation Component", () => {
  const mockEvent = {
    eventType: "",
    eventDate: "",
    venue: "",
  };

  test("renders input fields and button correctly", () => {
    render(
      <EventInformation
        event={mockEvent}
        setEvent={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText("Event Type")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Venue")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /submit event booking/i,
      })
    ).toBeInTheDocument();
  });

  test("shows message when all fields are empty", () => {
    render(
      <EventInformation
        event={mockEvent}
        setEvent={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit event booking/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete all Event Information fields."
      )
    ).toBeInTheDocument();
  });

  test("shows message when some fields are missing", () => {
    render(
      <EventInformation
        event={{
          eventType: "Wedding",
          eventDate: "",
          venue: "Balayan Church",
        }}
        setEvent={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit event booking/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete the missing Event Information fields."
      )
    ).toBeInTheDocument();
  });

  test("shows success message when all fields are complete", () => {
    render(
      <EventInformation
        event={{
          eventType: "Wedding",
          eventDate: "2026-08-01",
          venue: "Balayan Church",
        }}
        setEvent={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit event booking/i,
      })
    );

    expect(
      screen.getByText(
        "Event Information Submitted Successfully!"
      )
    ).toBeInTheDocument();
  });

  test("accepts user input", () => {
    const setEvent = vi.fn();

    render(
      <EventInformation
        event={mockEvent}
        setEvent={setEvent}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText("Event Type"),
      {
        target: {
          value: "Wedding",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Venue"),
      {
        target: {
          value: "Balayan Church",
        },
      }
    );

    expect(setEvent).toHaveBeenCalledTimes(2);
  });

  test("displays validation errors", () => {
    render(
      <EventInformation
        event={mockEvent}
        setEvent={() => {}}
        errors={{
          eventType: "Event Type is required",
          eventDate: "Event Date is required",
          venue: "Venue is required",
        }}
        setErrors={() => {}}
      />
    );

    expect(
      screen.getByText("Event Type is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Event Date is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Venue is required")
    ).toBeInTheDocument();
  });

  test("calls setErrors on submit", () => {
    const setErrors = vi.fn();

    render(
      <EventInformation
        event={mockEvent}
        setEvent={() => {}}
        errors={{}}
        setErrors={setErrors}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit event booking/i,
      })
    );

    expect(setErrors).toHaveBeenCalled();
  });
});