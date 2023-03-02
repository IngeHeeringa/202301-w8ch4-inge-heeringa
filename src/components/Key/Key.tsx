import styles from "./Key.module.scss";

interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  return <button className={styles.key}>{keyText}</button>;
};

export default Key;
