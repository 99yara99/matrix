import './input.css';

const InputComponent = ({ value, onChange, textInput }) => {
  return (
    <>
      <p className="text">{textInput}</p>
      <input className="input" value={value} onChange={onChange}></input>
    </>
  );
};

export default InputComponent;
