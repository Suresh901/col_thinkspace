import React from "react";
import QuestionAccordion from "../accordion/QuestionAccordion";

const Questions = ({
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center py-10 md:px-12 px-6">
      <div className="lg:w-1/3 pb-5 md:px-6">
        <div className="sticky top-24 flex flex-col gap-2">
          <div className="font-bold text-2xl md:text-3xl lg:text-4xl flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-transparent bg-clip-text">
                {title}
              </span>
              {title1} <br />
            </h1>

            <h1>
              <span className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-transparent bg-clip-text">
                {title2}
              </span>
              {title3}
              <br />
            </h1>

            <h1>
              <span className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-transparent bg-clip-text">
                {title4}
              </span>
              {title5}
            </h1>
          </div>

          <h2 className="text-md md:text-xl">{title6}</h2>
        </div>
      </div>

      <div className="w-full md:px-6 break-words">
        <QuestionAccordion />
      </div>
    </div>
  );
};

export default Questions;
