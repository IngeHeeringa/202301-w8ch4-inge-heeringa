import Key from "../Key/Key";
import styles from "./Calculator.module.scss";

const Calculator = (): JSX.Element => {
  const keyTexts = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "clear",
    ".",
    "=",
  ];

  return (
    <div className={styles.calculator}>
      <div className={styles.display}></div>
      <ul>
        {keyTexts.map((keyText) => (
          <li>
            <Key keyText={keyText} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
