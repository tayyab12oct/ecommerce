import { memo } from 'react';

function Select(props) {
  const {
    className,
    options,
    defaultValue,
    register,
    name,
    error,
    required,
  } = props;
  return (
    <select
      className={`${className} ${
        error && name && error[name] ? 'border-red-500' : ''
      } focus:outline-none`}
      defaultValue={defaultValue}
      id={name}
      name={name}
      onChange={props?.onChange}
      {...register(name, { required: required })}

    >
      {options}
    </select>
  );
}
Select.defaultProps = {
  defaultValue: 'Select',
  className:
    'pl-1 pr-10 py-1.5 text-xs border-gray-700 bg-gray-500 focus:outline-none',
  register: (e) => e,
  required: true,
};
export default memo(Select);
