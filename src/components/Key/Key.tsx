interface KeyProps {
  keyText: string;
}

const Key = ({ keyText }: KeyProps): JSX.Element => {
  return <button>{keyText}</button>;
};

export default Key;
