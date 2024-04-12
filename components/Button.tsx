import React from 'react';
import { IconType } from 'react-icons/lib';

interface ButtonProps {
    label: string;
    onClick: ()=> void;
    disabled: boolean;
    icon?: IconType;
    outline? : boolean;
    small? : boolean;
    className?: string;
}
const Button = ({
    label,
    onClick,
    icon: Icon,
    disabled,
    outline,
    small,
    className
}: ButtonProps) => {


    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${className}
                overflow-hidden
                relative
                disabled:opacity-10
                disabled-cursor-not-allowed
                rounded-lg
                hover:saturate-150
                transition-none
                text-black
                w-full
                saturate-[1.25]
                ${outline ? 'bg-transparent' : 'bg-gradient-to-r from-[#ce1738] to-[#ce1738] hovser:from-fuchsia-700 hsr:to-rose-900 '}
                ${outline ? 'border-black' : '   bg-gradient-to-r from-[#ce1738] to-[#ce1738] hsover:from-fuchsia-700 hovser:to-rose-900'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'border-[1px]' : 'border-2'}
                peer
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                />
            )}
            <span className={`${className ? 'text-black' : 'text-white'}font-semibold'`}>
                {label}
            </span>

        </button>
    );
};

export default Button;