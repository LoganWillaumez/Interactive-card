import './Input.scss';
export const Input = ({
  pattern,
  value,
  type,
  name,
  placeholder,
  required,
  handleChange,
}: {
  pattern: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  required: boolean;
  handleChange: Function;
}) => {
  return (
    <input
      className='input'
      type={type}
      pattern={pattern}
      value={value}
      placeholder={placeholder}
      required={required}
      name={name}
      onChange={(e) => handleChange(e)}
      autoComplete='on'
    />
  );
};
