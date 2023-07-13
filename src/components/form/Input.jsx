export const Input = ({
  value,
  placeholder,
  labelInput,
  labelName,
  inputName,
  type = "text",
  onBlur = () => {},
  onChange 
}) => {
  return (
    <div className="form-group">
      <label htmlFor={labelInput}>{labelName}</label>
      <input
        type={type}
        name={inputName}
        id={labelInput}
        value={value}
        required
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};
