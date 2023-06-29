export const Input = ({
  value,
  placeholder,
  type = "text",
  onBlur = () => {},
  onChange 
}) => {
  return (
    <div className="input">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};
