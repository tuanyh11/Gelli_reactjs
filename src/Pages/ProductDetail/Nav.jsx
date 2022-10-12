import React from "react";
import { RectangleButton } from "../../Components";

const Nav = ({page, onClick}) => {
  return (
    <div className="flex items-center md:justify-start justify-center !mb-5">
      <div className="mr-3 text-sm font-semibold max-w-[33.3%] md:w-auto">
        <RectangleButton
          className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${
            page === "description" ? "!bg-primary text-white" : ""
          }`}
          text={"description"}
          onClick={(value) => onClick(value)}
        />
      </div>
      <div className="mr-3 text-sm font-semibold max-w-[33.3%] md:w-auto">
        <RectangleButton
          className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${
            page === "additional inffomation" ? "!bg-primary text-white" : ""
          }`}
          text={"additional inffomation"}
          onClick={(value) => onClick(value)}
        />
      </div>
      <div className=" text-sm font-semibold max-w-[33.3%] md:w-auto">
        <RectangleButton
          className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${
            page === "review" ? "!bg-primary text-white" : ""
          }`}
          text={"review"}
          onClick={(value) => onClick(value)}
        />
      </div>
    </div>
  );
};

export default Nav;
