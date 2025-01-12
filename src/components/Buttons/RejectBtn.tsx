import React from "react";
import BladeLoader from "../BladeLoader/BladeLoader";
interface Props {
  text: string;
  clickEvent: () => void;
  disabled?: boolean;
  isCruding?: boolean;
}

const SuccessBtn = ({ text, clickEvent, disabled, isCruding }: Props) => {
  return (
    <div className="w-full">
      <button
        onClick={clickEvent}
        disabled={disabled || isCruding}
        className={`text-white btn text-nowrap flex-1 text-xs font-normal font-raleway w-full py-2 px-4 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-800 bg-red-600
          }`}
      >
        {isCruding ? <BladeLoader /> : text}
      </button>
    </div>
  );
};

export default SuccessBtn;
