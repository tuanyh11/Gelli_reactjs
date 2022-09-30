import React from "react";
import { FaGlobe } from "react-icons/fa";
import DiamondButton from "../../Common/Button/DiamondButton";

const Policy = ({data}) => {
  return (
    <div>
      <div className="flex flex-col items-center group">
        <div className="mb-4 w-[80px] h-[80px]">
          <DiamondButton
            containerButton=" w-full h-full !border-b-1 group-hover:!border-primary !rounded-md"
            button="border-[#e1e1e1] border p-2 bg-white transition  group-hover:!bg-primary !rounded-md  group-hover:!border-primary"
          >
            <FaGlobe className="w-8 h-8 group-hover:text-white text-gray-darkest" />
          </DiamondButton>
        </div>

        <div className="text-center ">
          <h1 className="text-gray-darkest leading-7 group-hover:!text-primary">
            {data.heading}
          </h1>
          <p className="text-gray-3 text-sm">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
