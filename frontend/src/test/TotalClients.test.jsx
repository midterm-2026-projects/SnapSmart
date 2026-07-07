import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TotalClients from "../components/TotalClients";

describe("TotalClients Component", () => {
  test("renders total clients", () => {
    render(<TotalClients totalClients={35} />);

    expect(screen.getByText("Total Clients")).toBeInTheDocument();
    expect(screen.getByText("35")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<TotalClients totalClients={0} />);

    expect(
      screen.getByText("No client data available")
    ).toBeInTheDocument();
  });
});