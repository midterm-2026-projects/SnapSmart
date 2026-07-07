import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, it } from "vitest";
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

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Contact Number")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /submit client information/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation message when fields are empty", () => {
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
        target: {
          value: "Juan Dela Cruz",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      {
        target: {
          value: "juan@example.com",
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

    expect(setClient).toHaveBeenNthCalledWith(
      1,
      {
        fullName: "Juan Dela Cruz",
        email: "",
        contactNumber: "",
      }
    );

    expect(setClient).toHaveBeenNthCalledWith(
      2,
      {
        fullName: "",
        email: "juan@example.com",
        contactNumber: "",
      }
    );

    expect(setClient).toHaveBeenNthCalledWith(
      3,
      {
        fullName: "",
        email: "",
        contactNumber: "09123456789",
      }
    );
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

    expect(screen.getByText("Full Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Contact Number is required")).toBeInTheDocument();
  });

  it("displays error messages for empty fields on submit", () => {
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

    expect(setErrors).toHaveBeenCalledWith(
      expect.any(Function)
    );
  });
});