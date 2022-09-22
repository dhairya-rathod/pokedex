import React, { useId } from 'react';

const Input = ({ className = '', label = '', name, value, onChange, ...props }) => {
  const id = useId();

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-slate-700 text-sm font-semibold pb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-slate-200 p-2 rounded-lg ${className}`}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
