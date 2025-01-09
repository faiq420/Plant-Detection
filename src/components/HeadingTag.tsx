import React from "react";

interface Props {
  heading: string;
}

const HeadingTag = ({ heading }: Props) => {
  return (
    <div className="flex justify-center mb-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-green-900 font-raleway">
        {" "}
        {/*border-b-2 border-b-green-900 pb-4*/}
        {heading}
      </h2>

      {/* <div className="flex items-center justify-center mt-2 relative w-full">
        <div className="flex-grow">
          <hr className="h-px border-t-0 bg-transparent bg-gradient-to-l from-green-900 via-green-900 to-transparent opacity-25 dark:via-neutral-400" />
        </div>

        <div className="w-3 h-3 bg-green-900 rounded-full mx-2" />

        <div className="flex-grow">
          <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-green-900 via-green-900 to-transparent opacity-25 dark:via-neutral-400" />
        </div>
      </div> */}
    </div>
  );
};

export default HeadingTag;
