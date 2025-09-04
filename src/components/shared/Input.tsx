import React from "react";

const Input = ({
  name,
  label,
  value,
  handleChange,
  disabled,
  width,
  bgColor,
  type
}: any) => {
  return (
    <div className="w-full relative">
      <input
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={label}
        type={type}
        className={`${bgColor ? "bgColor" : "bg-white"}  px-4 py-1 border border-black font-times text-base rounded w-full`}
      />
    </div>
  );
};

export default Input;
