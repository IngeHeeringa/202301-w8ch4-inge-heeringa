import { CalculatorState } from "../../types";
import {
  appendNumberActionCreator,
  calculatorReducer,
} from "./calculatorSlice";

describe("Given a calculatorReducer function", () => {
  describe("When it receives the number 53 and an appendNumber action with payload 8", () => {
    test("Then it should return a new state with display 538 and currentOperand 538", () => {
      const currentState: CalculatorState = {
        display: "53",
        currentOperand: "53",
        previousOperand: "",
        operator: null,
      };
      const payload = "8";
      const expectedState: CalculatorState = {
        display: "538",
        currentOperand: "538",
        previousOperand: "",
        operator: null,
      };

      const newState = calculatorReducer(
        currentState,
        appendNumberActionCreator(payload)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
