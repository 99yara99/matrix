import React from 'react';
import './input.css';

interface InputComponentProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textInput: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  value,
  onChange,
  textInput,
}) => {
  return (
    <>
      <p className="text">{textInput}</p>
      <input
        type="number"
        className="input"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default InputComponent;
