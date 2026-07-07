import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import SendNotificationModal from "../components/SendNotificationModal";


describe("SendNotificationModal Component", () => {


  test("renders modal when opened", () => {

    render(
      <SendNotificationModal
        isOpen={true}
        onClose={() => {}}
        onSend={() => {}}
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
        onSend={() => {}}
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

  });



  test("shows validation error when sending empty form", async () => {

    const user = userEvent.setup();


    render(
      <SendNotificationModal
        isOpen={true}
        onClose={() => {}}
        onSend={() => {}}
      />
    );


    await user.click(
      screen.getByText("Send")
    );


    expect(
      screen.getByTestId(
        "error-message"
      )
    ).toHaveTextContent(
      "Title and message are required"
    );

  });



  test("calls onSend when form is filled", async () => {

    const user = userEvent.setup();

    const mockSend = vi.fn();


    render(
      <SendNotificationModal
        isOpen={true}
        onClose={() => {}}
        onSend={mockSend}
      />
    );


    await user.type(
      screen.getByPlaceholderText(
        "Notification title"
      ),
      "System Update"
    );


    await user.type(
      screen.getByPlaceholderText(
        "Notification message"
      ),
      "Maintenance tonight"
    );


    await user.click(
      screen.getByText("Send")
    );


    expect(mockSend)
      .toHaveBeenCalledWith({
        title: "System Update",
        message: "Maintenance tonight",
      });

  });



});