import { appendNumberActionCreator } from "../../store/feature/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styles from "./Key.module.scss";

interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { display } = useAppSelector((state) => state.calculator);

  const handleClick = (keyText: string) => {
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(keyText) &&
      display.length < 16
    ) {
      dispatch(appendNumberActionCreator(keyText));
    }
  };

  return (
    <button className={styles.key} onClick={() => handleClick(keyText)}>
      {keyText}
    </button>
  );
};

export default Key;
