import { useAppSelector } from "../../store/hooks";
import styles from "./Display.module.scss";

const Display = (): JSX.Element => {
  const displayValue = useAppSelector((state) => state.calculator.display);

  return <span className={styles.display}>{displayValue}</span>;
};

export default Display;
