import React from "react";
import BladeLoader from "../BladeLoader/BladeLoader";
interface Props {
  text: string;
  clickEvent: () => void;
  disabled?: boolean;
  isCruding?: boolean;
}

const SubmitBtn = ({ text, clickEvent, disabled, isCruding }: Props) => {
  return (
    <div className="w-full">
      <button
        onClick={clickEvent}
        disabled={disabled || isCruding}
        className={`text-white btn text-nowrap rounded-none flex-1 text-xs font-normal font-raleway w-full py-2 px-4 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1B6CB880] hover:bg-[#1b6cb8c5] bg-[#1B6CB8]
          }`}
      >
        {isCruding ? <BladeLoader /> : text}
      </button>
    </div>
  );
};

export default SubmitBtn;
