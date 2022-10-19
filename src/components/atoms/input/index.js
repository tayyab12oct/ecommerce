import { memo } from 'react';
function Input(props) {
  const {
    type,
    name,
    id,
    className,
    placeholder,
    onChange,
    value,
    error,
    register,
    rules,
    required,
  } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className={`${className} focus:outline-none ${
        error && name && error[name] ? 'border-red-500 border' : ''
      }`}
      placeholder={placeholder}
      onChange={onChange}
      {...register(name, { required: required, ...rules })}
    />
  );
}
Input.defaultProps = {
  type: 'text',
  name: '',
  id: '',
  className:
    'p-2 py-1.5 block w-full border text-2xs border-gray-100 placeholder-gray-700',
  placeholder: '',
  register: (e) => e,
  rules: {},
  required: false,
};
export default memo(Input);
