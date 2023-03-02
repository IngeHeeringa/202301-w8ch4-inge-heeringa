import Key from "../Key/Key";

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
    "clear",
    ".",
    "=",
  ];

  return (
    <ul>
      {keyTexts.map((keyText) => (
        <li>
          <Key keyText={keyText} />
        </li>
      ))}
    </ul>
  );
};
export default Keypad;
