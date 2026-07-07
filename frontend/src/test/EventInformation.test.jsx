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

  test("shows validation message when fields are empty", () => {
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

    expect(setEvent).toHaveBeenNthCalledWith(
      1,
      {
        eventType: "Wedding",
        eventDate: "",
        venue: "",
      }
    );

    expect(setEvent).toHaveBeenNthCalledWith(
      2,
      {
        eventType: "",
        eventDate: "",
        venue: "Balayan Church",
      }
    );
  });
});