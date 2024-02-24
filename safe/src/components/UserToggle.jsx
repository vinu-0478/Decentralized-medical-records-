import React, { useState } from "react";

const UserToggle = ({ setType }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setType(isChecked);
    console.log(isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          Patient
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          Doctor
        </span>
      </label>
    </>
  );
};

export default UserToggle;
