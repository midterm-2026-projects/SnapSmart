import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

import {
  describe,
  it,
  expect
} from "vitest";

import ChatbotInterface from "../components/ChatbotInterface";


describe("ChatbotInterface Component", () => {


  it("renders chatbot interface", () => {
    render(<ChatbotInterface />);

    expect(
      screen.getByTestId("chatbot-interface")
    ).toBeInTheDocument();
  });



  it("renders chatbot title", () => {
    render(<ChatbotInterface />);

    expect(
      screen.getByRole("heading", {
        name: /chatbot/i
      })
    ).toBeInTheDocument();
  });



  it("renders message display and user input", () => {
    render(<ChatbotInterface />);

    expect(
      screen.getByTestId("message-display")
    ).toBeInTheDocument();


    expect(
      screen.getByTestId("user-input")
    ).toBeInTheDocument();


    expect(
      screen.getByTestId("send-button")
    ).toBeInTheDocument();
  });



  it("allows user to send a message", () => {
    render(<ChatbotInterface />);


    const input =
      screen.getByTestId("user-input");


    const button =
      screen.getByTestId("send-button");


    fireEvent.change(input, {
      target: {
        value: "Hello"
      }
    });


    fireEvent.click(button);



    expect(
      screen.getByText("Hello")
    ).toBeInTheDocument();



    expect(
      screen.getByText("Message received!")
    ).toBeInTheDocument();

  });



  it("does not send empty messages", () => {
    render(<ChatbotInterface />);


    const button =
      screen.getByTestId("send-button");


    fireEvent.click(button);


    expect(
      screen.getByText("No messages yet.")
    ).toBeInTheDocument();

  });


});