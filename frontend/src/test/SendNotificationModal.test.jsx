import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SendNotificationModal from "../components/SendNotificationModal";


describe("SendNotificationModal Component", () => {

  test("renders modal when opened", () => {

    render(
      <SendNotificationModal
        isOpen={true}
        onClose={() => {}}
      />
    );

    expect(
      screen.getByTestId(
        "send-notification-modal"
      )
    ).toBeInTheDocument();

  });


  test("displays form fields correctly", () => {

    render(
      <SendNotificationModal
        isOpen={true}
        onClose={() => {}}
      />
    );


    expect(
      screen.getByPlaceholderText(
        "Notification title"
      )
    ).toBeInTheDocument();


    expect(
      screen.getByPlaceholderText(
        "Notification message"
      )
    ).toBeInTheDocument();


    expect(
      screen.getByText("Send")
    ).toBeInTheDocument();

  });


  test("does not render when closed", () => {

    render(
      <SendNotificationModal
        isOpen={false}
        onClose={() => {}}
      />
    );


    expect(
      screen.queryByTestId(
        "send-notification-modal"
      )
    ).not.toBeInTheDocument();

  });


  test("calls onClose when cancel button is clicked", async () => {

    const mockClose = vi.fn();

    render(
      <SendNotificationModal
        isOpen={true}
        onClose={mockClose}
      />
    );


    screen.getByText("Cancel").click();


    expect(mockClose)
      .toHaveBeenCalled();

  });

});