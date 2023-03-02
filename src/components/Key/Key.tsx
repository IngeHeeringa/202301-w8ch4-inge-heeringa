import { appendNumberActionCreator } from "../../store/feature/calculatorSlice";
import { useAppDispatch } from "../../store/hooks";
import styles from "./Key.module.scss";

interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const appendNumber = (number: string) => {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(number)) {
      dispatch(appendNumberActionCreator(number));
    }
  };

  return (
    <button className={styles.key} onClick={() => appendNumber(keyText)}>
      {keyText}
    </button>
  );
};

export default Key;
