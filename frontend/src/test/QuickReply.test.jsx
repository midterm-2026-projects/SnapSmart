import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuickReply from "../components/QuickReply";

test("QuickReply component displays options correctly", () => {
  render(
    <QuickReply
      options={[
        "Book a Session",
        "View Packages",
        "Contact Support",
      ]}
    />
  );

  expect(screen.getByText("Book a Session")).toBeInTheDocument();
  expect(screen.getByText("View Packages")).toBeInTheDocument();
  expect(screen.getByText("Contact Support")).toBeInTheDocument();
});