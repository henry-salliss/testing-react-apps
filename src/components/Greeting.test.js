import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("component renders hello world", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing at the moment

    // Assert
    const helloWorldText = screen.getByText("Hello World", { exact: false });
    expect(helloWorldText).toBeInTheDocument();
  });

  test("component renders its good to see you text", () => {
    render(<Greeting />);

    const greetingText = screen.getByText("Its good to see you", {
      exact: false,
    });
    expect(greetingText).toBeInTheDocument();
  });

  test("renders changed if the button is clicked", () => {
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedText = screen.getByText("changed");
    expect(changedText).toBeInTheDocument();
  });

  test("checks that the original text is not in the document once the button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const originalText = screen.queryByText("Its good to see you");
    expect(originalText).toBeNull();
  });
});
