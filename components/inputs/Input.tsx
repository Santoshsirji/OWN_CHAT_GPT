import React from 'react'
import { DeepMap, FieldError } from 'react-hook-form';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: any; // Change register type to any
    errors: DeepMap<any, FieldError>; // Use DeepMap to properly type errors
}

const Input = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    register,
    errors
}: InputProps) => {
    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} // Fix class name
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'} // Fix class name
                `}
            />
            <label
                htmlFor={id} // Add htmlFor attribute for accessibility
                className={`
                    absolute
                    text-md
                    duration-150
                    transition
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input
