import styles from "./Calculator.module.scss";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.display}></div>
    </div>
  );
};

export default Calculator;
