import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives the text '9'", () => {
    test("Then it should show a button with the number 9", () => {
      const keyText = "9";
      const expectedNumber = "9";

      render(<Key keyText={keyText} />);
      const key = screen.getByRole("button", { name: expectedNumber });

      expect(key).toBeInTheDocument();
    });
  });

  describe("When it receives the text 'Clear'", () => {
    test("Then it should show a button with the text 'Clear'", () => {
      const keyText = "Clear";
      const expectedText = "Clear";

      render(<Key keyText={keyText} />);
      const key = screen.getByRole("button", { name: expectedText });

      expect(key).toBeInTheDocument();
    });
  });

  describe("When it receives the text '+'", () => {
    test("Then it should show a button with the operator '+'", () => {
      const keyText = "+";
      const expectedOperator = "+";

      render(<Key keyText={keyText} />);
      const key = screen.getByRole("button", { name: expectedOperator });

      expect(key).toBeInTheDocument();
    });
  });
});
