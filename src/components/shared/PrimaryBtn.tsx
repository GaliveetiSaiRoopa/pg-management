import React from "react";

const PrimaryBtn = ({ onClick, width, disabled, label }: any) => {
  return (
    <div className={`${width}`}>
      <button
        className={`w-full bg-slate-400 text-black font-times rounded py-1 ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default PrimaryBtn;
