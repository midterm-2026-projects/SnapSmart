import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import GeneratedReportsTable from "../components/GeneratedReportsTable";

describe("GeneratedReportsTable Component", () => {
  test("renders table headers", () => {
    render(<GeneratedReportsTable reports={[]} />);

    expect(screen.getByText("Report Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  test("renders report rows", () => {
    const reports = [
      {
        name: "Sales Report",
        date: "July 1",
        status: "Completed",
      },
    ];

    render(<GeneratedReportsTable reports={reports} />);

    expect(screen.getByText("Sales Report")).toBeInTheDocument();
    expect(screen.getByText("July 1")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<GeneratedReportsTable reports={[]} />);

    expect(screen.getByText("No reports available")).toBeInTheDocument();
  });
});