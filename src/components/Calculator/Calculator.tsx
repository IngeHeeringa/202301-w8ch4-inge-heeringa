import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import styles from "./Calculator.module.scss";

const Calculator = (): JSX.Element => {
  return (
    <div className={styles.calculator}>
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;
