import React from "react";

const PackageCard = ({ data }) => {
  return (
    <div>
      <div className="border border-gray-400 p-5 w-auto rounded-md">
        <div className="flex flex-col gap-3 mb-5">
          <div
            className={`border p-2 rounded-md ${data.bgColor} flex flex-col items-center font-bold text-xl`}
          >
            <h1>{data.name}</h1>
            <h1>{data.subtitle}</h1>
          </div>
          <div className="flex flex-col items-center border-b border-gray-400 text-xl">
            <h1 className="pb-4">{data.price}</h1>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-2 text-xl items-center">
          {data.features.map((item) => {
            return <li key={data.features.indexOf(item)}>{item}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
