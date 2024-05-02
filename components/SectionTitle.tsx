import React from "react";

const SectionTitle = ({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) => {
  return (
    <div className="text-center">
      <h3 className="uppercase text-gray-500 text-lg font-semibold leading-4">
        {subTitle}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{title}</h2>
    </div>
  );
};

export default SectionTitle;
