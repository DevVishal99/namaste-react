import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("this is Contact test cases", () => {
  test("Should render heading in contact page on screeen", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should render submit in contact page ", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
  });

  test("Should render submit in contact page ", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
