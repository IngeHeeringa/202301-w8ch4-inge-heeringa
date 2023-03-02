import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorState } from "../../types";

const initialCalculatorState: CalculatorState = {
  display: "",
  currentOperand: 0,
  previousOperand: 0,
  operator: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialCalculatorState,
  reducers: {
    appendNumber: (
      currentCalculatorState: CalculatorState,
      action: PayloadAction<number>
    ): CalculatorState => ({
      ...currentCalculatorState,
      display: currentCalculatorState.display.concat("" + action.payload),
      currentOperand: currentCalculatorState.currentOperand + action.payload,
    }),
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { appendNumber: appendNumberActionCreator } =
  calculatorSlice.actions;
