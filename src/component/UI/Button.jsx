import React from 'react';

const Button = ({
  className = '',
  label,
  isDisabled = false,
  color = 'primary',
  type = 'button'
}) => {
  const _color = color === 'primary' ? 'btn-primary' : '';

  return (
    <button
      className={`p-2 w-full font-semibold text-lg rounded-lg ${className} ${_color}`}
      disabled={isDisabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
