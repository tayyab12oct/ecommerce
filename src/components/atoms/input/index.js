import React from "react";
import { twMerge } from "tailwind-merge";

function Input(props) {
  const {
    name,
    placeholder,
    type,
    label,
    id,
    icon,
    labelClass,
    inputClass,
    touched,
    errors
  } = props;
  return (
    <div className="w-full flex flex-col transition-all">
      <label
        className={twMerge(
          `text-sm text-secondary-300 font-semibold mb-2.5 ${labelClass}`
        )}
        htmlFor={id}
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <div>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          // {...register(name, rules)}
          {...props}
          className={twMerge(
            `relative transition-all w-full focus:border-primary-main border text-secondary-300 px-4 py-3 placeholder:tracking-wide focus:outline-none ${inputClass} 
            ${errors && touched ? "border-red-500 focus:border-red-500" : "border-secondary-50"
            }`
          )}
        />
        {icon}
      </div>
      {errors && touched ?
        <p className="text-red-500 text-xs tracking-wide mt-2 transition-all">
          {errors}
        </p>
        : null
      }
    </div>
  );
}

export default Input;