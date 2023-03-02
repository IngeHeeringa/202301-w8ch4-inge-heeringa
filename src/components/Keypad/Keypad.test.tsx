import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Keypad from "./Keypad";

describe("Given a Keypad component", () => {
  describe("When rendered", () => {
    test("It should show a list of keys on the screen", () => {
      render(
        <Provider store={store}>
          <Keypad />
        </Provider>
      );

      const keys = screen.getAllByRole("button");

      keys.forEach((key) => expect(key).toBeInTheDocument());
    });
  });
});
