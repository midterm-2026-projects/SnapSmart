import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import GenerateReportModal from "../components/GenerateReportModal";

describe("GenerateReportModal Component", () => {
  test("renders modal fields", () => {
    render(<GenerateReportModal isOpen={true} />);

    expect(screen.getByText("Generate Report")).toBeInTheDocument();

    expect(
      screen.getByLabelText("Report Name")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Date From")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Date To")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Generate" })
    ).toBeInTheDocument();
  });

  test("allows user to type into input fields", () => {
    render(<GenerateReportModal isOpen={true} />);

    const reportInput =
      screen.getByLabelText("Report Name");

    fireEvent.change(reportInput, {
      target: {
        value: "Sales Report",
      },
    });

    expect(reportInput.value).toBe("Sales Report");
  });

  test("shows validation message when fields are empty", () => {
    render(<GenerateReportModal isOpen={true} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Generate" })
    );

    expect(
      screen.getByText("Please fill in all fields.")
    ).toBeInTheDocument();
  });

  test("shows success message when all fields are completed", () => {
    render(<GenerateReportModal isOpen={true} />);

    fireEvent.change(
      screen.getByLabelText("Report Name"),
      {
        target: {
          value: "Sales Report",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText("Date From"),
      {
        target: {
          value: "2026-07-01",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText("Date To"),
      {
        target: {
          value: "2026-07-31",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Generate" })
    );

    expect(
      screen.getByText("Report generated successfully.")
    ).toBeInTheDocument();
  });

  test("does not render when modal is closed", () => {
    render(<GenerateReportModal isOpen={false} />);

    expect(
      screen.queryByText("Generate Report")
    ).not.toBeInTheDocument();
  });
});