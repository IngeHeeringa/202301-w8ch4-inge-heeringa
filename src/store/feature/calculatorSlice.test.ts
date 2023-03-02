import { CalculatorState } from "../../types";
import {
  appendNumberActionCreator,
  calculatorReducer,
  sumNumbersActionCreator,
} from "./calculatorSlice";

describe("Given a calculatorReducer function", () => {
  describe("When it receives the number 53 and an appendNumber action with payload 8", () => {
    test("Then it should return a new state with display 538 and currentOperand 538", () => {
      const currentState: CalculatorState = {
        display: "53",
        currentOperand: 53,
        previousOperand: 0,
        operator: null,
      };
      const payload = "8";
      const expectedState: CalculatorState = {
        display: "538",
        currentOperand: 538,
        previousOperand: 0,
        operator: null,
      };

      const newState = calculatorReducer(
        currentState,
        appendNumberActionCreator(payload)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives the number 6 and a sumNumbers action with payload 4", () => {
    test("Then it should return a new state with display 10, currentOperand 10 and previousOperand 6", () => {
      const currentState: CalculatorState = {
        display: "6",
        currentOperand: 6,
        previousOperand: 0,
        operator: null,
      };
      const payload = "4";
      const expectedState: CalculatorState = {
        display: "10",
        currentOperand: 10,
        previousOperand: 6,
        operator: "+",
      };

      const newState = calculatorReducer(
        currentState,
        sumNumbersActionCreator(payload)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
