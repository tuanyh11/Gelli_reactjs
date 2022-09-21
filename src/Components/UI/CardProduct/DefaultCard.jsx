import React from 'react';
import { FaHeart, FaSearch } from 'react-icons/fa';
import DiamondButton from '../Button/DiamondButton';

const DefaultCard = ({ data }) => {
  return (
    <div className="relative z-40">
      <div className=" p-[30px] border border-c-4 hover:!border-primary default-transition relative z-[-1]">
        <div className=" flex items-center top-[-30px] absolute ">
            <div className="mr-2">
            <DiamondButton
                button="!border-primary border p-2 bg-white  group-hover:scale-[1.05]"
                containerButton="!w-full !h-full group hover:!p-[4px]"
            >
                {<FaSearch className="!text-primary" />}
            </DiamondButton>
            </div>
            <div className="m-2">
            <DiamondButton
                button="!border-primary border p-2 bg-white  group-hover:scale-[1.05]"
                containerButton="!w-full !h-full group hover:!p-[4px]"
            >
                {<FaHeart className="!text-primary" />}
            </DiamondButton>
            </div>
            <div className="ml-2">
            <DiamondButton
                button="!border-primary border p-2 bg-white  group-hover:scale-[1.05]"
                containerButton="!w-full !h-full group hover:!p-[4px]"
            >
                {<FaHeart className="!text-primary" />}
            </DiamondButton>
            </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              className="object-contain  w-[90px] h-[160px]"
              src={data.image}
              alt=""
            />
          </div>
          <div className="mt-[45px]">
            <h3 className="text-13 text-center ">{data.name}</h3>
            <h1 className="text-xl font-normal text-center !text-primary mt-1">
              {data.price}
            </h1>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default DefaultCard;
