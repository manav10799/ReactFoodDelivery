import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);
    const placeholderMessage = screen.getByPlaceholderText("message");
    expect(placeholderMessage).toBeInTheDocument();
  });

  it("Should load two input name inside contact component", () => {
    render(<Contact />);
    const placeholderMessage = screen.getAllByRole("textbox");
    expect(placeholderMessage.length).toBe(2);
  });
});
