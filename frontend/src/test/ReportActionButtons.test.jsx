import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import ReportActionButtons from "../components/ReportActionButtons";

describe("ReportActionButtons Component", () => {

  test("renders Generate button", () => {
    render(
      <ReportActionButtons
        onGenerate={() => {}}
        onDownload={() => {}}
        onExport={() => {}}
      />
    );

    expect(
      screen.getByRole("button", { name: "Generate" })
    ).toBeInTheDocument();
  });

  test("renders Download button", () => {
    render(
      <ReportActionButtons
        onGenerate={() => {}}
        onDownload={() => {}}
        onExport={() => {}}
      />
    );

    expect(
      screen.getByRole("button", { name: "Download" })
    ).toBeInTheDocument();
  });

  test("renders Export button", () => {
    render(
      <ReportActionButtons
        onGenerate={() => {}}
        onDownload={() => {}}
        onExport={() => {}}
      />
    );

    expect(
      screen.getByRole("button", { name: "Export" })
    ).toBeInTheDocument();
  });

  test("calls Generate function when button is clicked", () => {
    const generate = vi.fn();

    render(
      <ReportActionButtons
        onGenerate={generate}
        onDownload={() => {}}
        onExport={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Generate" })
    );

    expect(generate).toHaveBeenCalledTimes(1);
  });

  test("calls Download function when button is clicked", () => {
    const download = vi.fn();

    render(
      <ReportActionButtons
        onGenerate={() => {}}
        onDownload={download}
        onExport={() => {}}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Download" })
    );

    expect(download).toHaveBeenCalledTimes(1);
  });

  test("calls Export function when button is clicked", () => {
    const exportReport = vi.fn();

    render(
      <ReportActionButtons
        onGenerate={() => {}}
        onDownload={() => {}}
        onExport={exportReport}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Export" })
    );

    expect(exportReport).toHaveBeenCalledTimes(1);
  });

  test("disables all buttons while loading", () => {
    render(
      <ReportActionButtons
        loading={true}
        onGenerate={() => {}}
        onDownload={() => {}}
        onExport={() => {}}
      />
    );

    expect(
      screen.getByRole("button", {
        name: "Generating...",
      })
    ).toBeDisabled();

    expect(
      screen.getByRole("button", {
        name: "Download",
      })
    ).toBeDisabled();

    expect(
      screen.getByRole("button", {
        name: "Export",
      })
    ).toBeDisabled();
  });

});