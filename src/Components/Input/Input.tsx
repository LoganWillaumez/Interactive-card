import './Input.scss';
export const Input = ({
  pattern,
  value,
  type,
  name,
  placeholder,
  required,
  handleChange,
  arialabel
}: {
  pattern: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  required: boolean;
  handleChange: Function;
  arialabel: string;
}) => {
  return (
    <input
      className="input"
      type={type}
      pattern={pattern}
      value={value}
      placeholder={placeholder}
      required={required}
      name={name}
      onChange={(e) => handleChange(e)}
      autoComplete="on"
      aria-label={arialabel}
    />
  );
};
