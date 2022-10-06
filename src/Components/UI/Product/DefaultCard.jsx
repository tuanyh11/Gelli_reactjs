import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import DiamondButton from '../../Common/Button/DiamondButton';
import './style.css'


const DefaultCard = ({ 
  data, 
  adapteHeightTop = true, 
  adapteHeightBottom = true, 
  valueAdapteHeightTop = 30, 
  valueAdapteHeightBottom = 80
}) => {
  return (
    <div className=''>
      {adapteHeightTop && <div className="w-full relative z-[-1]" style={{ height: `${valueAdapteHeightTop}px` }}></div>}
      <div className=" p-[30px] border border-c-4 hover:!border-primary default-transition relative z-[1] card-product-content">
        <div className=" flex items-center justify-center top-[0] absolute z-[99999999] -translate-y-1/2 right-1/2 translate-x-1/2 product-content-actions">
          <div className="mr-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaSearch className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="m-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="ml-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
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
          <div className="pt-[45px] pb-[20px]">
            <h3 className="text-13 text-center ">{data.name}</h3>
            <h1 className="text-xl font-normal text-center !text-primary mt-1">
              {data.price}
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 product-action-addcart ">
          <DiamondButton
            containerButton="group !w-[60px] !h-[60px]"
            button="!border-primary border p-2 bg-white   group-hover:!bg-primary origin-center"
          >
            {<FaShoppingCart className="!text-primary group-hover:!text-white" />}
          </DiamondButton>
        </div>
      </div>
      {adapteHeightBottom && <div className="w-full  relative z-[-1]" style={{ height: `${valueAdapteHeightBottom}px` }}></div>}
    </div>
  );
};

export default DefaultCard;
