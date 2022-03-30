import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("posts render correctly", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    render(<Async />);

    // act

    //assert
    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).not.toHaveLength(0);
  });
});
