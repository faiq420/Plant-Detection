import React from "react";

interface Props {
  heading: string;
}
const SubHeadingTag = ({ heading }: Props) => {
  return (
    <h2 className="text-lg font-bold text-green-900 text-center mb-4">
      {heading}
    </h2>
  );
};

export default SubHeadingTag;
