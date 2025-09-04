import React from "react";

const CheckBox = ({ name, label, onChange, value }: any) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="checkbox"
        className={`w-[14px] h-[14px]`}
      />
      <div className="font-times">{label}</div>
    </div>
  );
};

export default CheckBox;
