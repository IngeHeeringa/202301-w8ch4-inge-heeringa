import Keypad from "../Keypad/Keypad";
import styles from "./Calculator.module.scss";

const Calculator = (): JSX.Element => {
  return (
    <div className={styles.calculator}>
      <div className={styles.display}></div>
      <Keypad />
    </div>
  );
};

export default Calculator;
