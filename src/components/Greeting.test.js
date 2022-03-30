import { render, screen } from "@testing-library/react";
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
});
