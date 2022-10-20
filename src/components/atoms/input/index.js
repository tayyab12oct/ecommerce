import React from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

function Input(props) {
  const {
    name,
    placeholder,
    type,
    rules,
    label,
    id,
    icon,
    labelClass,
    inputClass,
    required
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full flex flex-col transition-all">
      <label
        className={twMerge(
          `text-sm text-secondary-300 font-semibold mb-2.5 ${labelClass}`
        )}
        htmlFor={id}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={twMerge(
            `relative transition-all w-full focus:border-primary-main border text-secondary-300 px-4 py-3 placeholder:tracking-wide focus:outline-none ${inputClass} 
            ${errors[name] ? "border-red-500 focus:border-red-500" : "border-secondary-50"
            }`
          )}
        />
        {icon}
      </div>
      {errors[name] &&
        <p className="text-red-500 text-xs tracking-wide mt-2 transition-all">
          {errors[name] ? errors[name]?.message : null}
        </p>
      }
    </div>
  );
}

export default Input;