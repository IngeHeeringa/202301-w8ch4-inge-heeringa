import styles from "./Calculator.module.scss";

const Calculator = (): JSX.Element => {
  return (
    <div className={styles.calculator}>
      <div className={styles.display}></div>
    </div>
  );
};

export default Calculator;
