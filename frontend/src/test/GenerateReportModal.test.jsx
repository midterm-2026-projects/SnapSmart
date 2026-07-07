import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import GenerateReportModal from "../components/GenerateReportModal";

describe("GenerateReportModal Component", () => {
  test("renders modal fields", () => {
    render(<GenerateReportModal isOpen={true} />);

    expect(screen.getByText("Generate Report")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Report Name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Date From")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Date To")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Generate" })
    ).toBeInTheDocument();
  });

  test("does not render when modal is closed", () => {
    render(<GenerateReportModal isOpen={false} />);

    expect(
      screen.queryByText("Generate Report")
    ).not.toBeInTheDocument();
  });
});