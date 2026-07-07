import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ClientInformation from "../components/ClientInformation";

const mockClient = {
  fullName: "",
  email: "",
  contactNumber: "",
};

describe("ClientInformation Component", () => {
  test("renders input fields correctly", () => {
    render(
      <ClientInformation
        client={mockClient}
        setClient={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contact Number")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    ).toBeInTheDocument();
  });

  test("shows message when all fields are empty", () => {
    render(
      <ClientInformation
        client={mockClient}
        setClient={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete all Client Information fields."
      )
    ).toBeInTheDocument();
  });

  test("shows message when some fields are missing", () => {
    render(
      <ClientInformation
        client={{
          fullName: "Juan Dela Cruz",
          email: "",
          contactNumber: "09123456789",
        }}
        setClient={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    );

    expect(
      screen.getByText(
        "Please complete the missing Client Information fields."
      )
    ).toBeInTheDocument();
  });

  test("shows success message when all fields are complete", () => {
    render(
      <ClientInformation
        client={{
          fullName: "Juan Dela Cruz",
          email: "juan@gmail.com",
          contactNumber: "09123456789",
        }}
        setClient={() => {}}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    );

    expect(
      screen.getByText(
        "Client Information Submitted Successfully!"
      )
    ).toBeInTheDocument();
  });

  test("accepts user input", () => {
    const setClient = vi.fn();

    render(
      <ClientInformation
        client={mockClient}
        setClient={setClient}
        errors={{}}
        setErrors={() => {}}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText("Full Name"),
      {
        target: { value: "Juan Dela Cruz" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      {
        target: { value: "juan@example.com" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Contact Number"),
      {
        target: { value: "09123456789" },
      }
    );

    expect(setClient).toHaveBeenCalledTimes(3);
  });

  test("displays validation errors", () => {
    render(
      <ClientInformation
        client={mockClient}
        setClient={() => {}}
        errors={{
          fullName: "Full Name is required",
          email: "Email is required",
          contactNumber: "Contact Number is required",
        }}
        setErrors={() => {}}
      />
    );

    expect(
      screen.getByText("Full Name is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Email is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Contact Number is required")
    ).toBeInTheDocument();
  });

  test("calls setErrors on submit", () => {
    const setErrors = vi.fn();

    render(
      <ClientInformation
        client={mockClient}
        setClient={() => {}}
        errors={{}}
        setErrors={setErrors}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    );

    expect(setErrors).toHaveBeenCalled();
  });
});