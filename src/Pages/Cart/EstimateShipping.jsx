import React from "react";
import { FaSortDown } from "react-icons/fa";
import { RectangleButton, TitleWithArrow } from "../../Components";

const EstimateShipping = () => {
  return (
    <div>
      <div className="mb-10">
        <TitleWithArrow
          text={"estimate shipping & tax"}
          textStyle={{ fontSize: "30px" }}
        />
      </div>
      <span className="!mb-5 block normal-case">
        Enter discount code if you have one
      </span>
      <div className="mb-7">
        <span className="!mb-3 block ">Country *</span>
        <div className="relative cursor-pointer">
          <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400">
            Choose an option
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
            <FaSortDown />
          </div>
        </div>
      </div>

      <div className="mb-7">
        <span className="!mb-3 block ">State / Province</span>
        <div className="relative cursor-pointer">
          <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400">
            Choose an option
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
            <FaSortDown />
          </div>
        </div>
      </div>

      <div className="mb-7">
        <span className="!mb-3 block ">Zip /Postal code</span>
        <div className="relative cursor-pointer">
          <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400 ">
            Choose an option
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
            <FaSortDown />
          </div>
        </div>
      </div>

      <div>
        <RectangleButton text="Get a quote" />
      </div>
    </div>
  );
};

export default EstimateShipping;
