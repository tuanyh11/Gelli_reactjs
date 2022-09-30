import React from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import DiamondButton from "../../Common/Button/DiamondButton";

const CardProductAct = ({ containerStyle, boxButtonStyle, customsButton }) => {
  return (
    <div className={containerStyle}>
      {customsButton ? (
        customsButton
      ) : (
        <div
          className={`${
            boxButtonStyle
              ? boxButtonStyle
              : "flex items-center justify-center "
          }`}
        >
          <div className="mr-2 ">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white default-transition group-hover:!bg-primary origin-center"
            >
              {<FaSearch className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="m-2 ">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white  default-transition  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="ml-2 ">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white default-transition  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProductAct;
