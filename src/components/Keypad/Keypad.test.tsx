import { render, screen } from "@testing-library/react";
import Keypad from "./Keypad";

describe("Given a Keypad component", () => {
  describe("When rendered", () => {
    test("It should show a list of keys on the screen", () => {
      render(<Keypad />);

      const keys = screen.getAllByRole("button");

      keys.forEach((key) => expect(key).toBeInTheDocument());
    });
  });
});
