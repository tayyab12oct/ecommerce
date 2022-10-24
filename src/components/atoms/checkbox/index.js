import React from "react";
import { twMerge } from "tailwind-merge";
import { BiCheck } from "react-icons/bi"

function Checkbox({ mainClass, label, labelClass, register, name, id, disable, ...props }) {
    return (
        <label className={twMerge(`flex items-center ${mainClass}`)}>
            <input
                className="peer hidden text-primary-main cursor-pointer"
                type="checkbox"
                id={id}
                name={name}
                disabled={disable}
                register={register ? register(name) : ""}
                {...props}
            />
            <label className="flex items-center justify-center h-5 w-5 bg-white border border-gray-300 cursor-pointer group focus:outline-none peer-checked:bg-primary-main peer-checked:border-primary-main" htmlFor={id}>
                <BiCheck className="text-xl text-white" />
            </label>
            <span className={twMerge(`text-gray-700 cursor-pointer pl-2 font-light ${labelClass}`)}>{label}</span>
        </label>
    );
}

export default Checkbox;