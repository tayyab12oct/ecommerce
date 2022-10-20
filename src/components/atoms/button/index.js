
import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ value, icon, className, ...props }) {
  return (
    <button
      {...props}
      disabled={props?.disabled || props?.loader}
      className={twMerge(
        `w-full bg-primary-main hover:bg-primary-hover hover:shadow transition-all items-center justify-center flex p-4 text-secondary-300 font-semibold focus:outline-none ${className}`
      )}
    >
      {props?.loader ? (
        <img src={props.src} alt="loader" className="w-8" />
      ) : (
        value
      )}
      {icon}
    </button>
  );
}

export default Button;