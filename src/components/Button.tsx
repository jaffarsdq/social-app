import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    className,
}) => {
    return (
        <button
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
