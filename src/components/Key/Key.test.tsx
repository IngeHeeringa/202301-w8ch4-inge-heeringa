import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives the text '9'", () => {
    test("Then it should show a button with the number 9", () => {
      const keyText = "9";
      const expectedNumber = "9";

      render(
        <Provider store={store}>
          <Key keyText={keyText} />
        </Provider>
      );
      const key = screen.getByRole("button", { name: expectedNumber });

      expect(key).toBeInTheDocument();
    });
  });

  describe("When it receives the text 'Clear'", () => {
    test("Then it should show a button with the text 'Clear'", () => {
      const keyText = "Clear";
      const expectedText = "Clear";

      render(
        <Provider store={store}>
          <Key keyText={keyText} />
        </Provider>
      );
      const key = screen.getByRole("button", { name: expectedText });

      expect(key).toBeInTheDocument();
    });
  });

  describe("When it receives the text '+'", () => {
    test("Then it should show a button with the operator '+'", () => {
      const keyText = "+";
      const expectedOperator = "+";

      render(
        <Provider store={store}>
          <Key keyText={keyText} />
        </Provider>
      );
      const key = screen.getByRole("button", { name: expectedOperator });

      expect(key).toBeInTheDocument();
    });
  });
});
