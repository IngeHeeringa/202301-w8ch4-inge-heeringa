import Key from "../Key/Key";
import styles from "./Keypad.module.scss";

const Keypad = (): JSX.Element => {
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
    ".",
    "=",
    "Clear",
  ];

  return (
    <ul className={styles.keypad}>
      {keyTexts.map((keyText) => (
        <li key={keyText}>
          <Key keyText={keyText} />
        </li>
      ))}
    </ul>
  );
};
export default Keypad;
