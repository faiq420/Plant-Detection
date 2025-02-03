import React from "react";

interface Props {
  heading: string;
}

const HeadingTag = ({ heading }: Props) => {
  return (
    <div className="flex justify-center mb-6">
      <h2 className="text-3xl font-bold text-green-900 font-raleway">
        {" "}
        {heading}
      </h2>
    </div>
  );
};

export default HeadingTag;
