import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { URL } from '../../../api';
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
      {adapteHeightTop && <div className="w-full relative " style={{ height: `${valueAdapteHeightTop}px` }}></div>}
      <div className=" p-[30px] border border-c-4 hover:!border-primary default-transition relative hover:z-10  card-product-content ">
        <div className=" flex items-center justify-center top-[0] absolute z-[99999999] -translate-y-1/2 right-1/2 translate-x-1/2 product-content-actions">
          <div className="mr-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group hover:bg-white "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaSearch className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="m-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group hover:bg-white "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
            </DiamondButton>
          </div>
          <div className="ml-2 product-action-button">
            <DiamondButton
              containerButton="!w-full !h-full group hover:bg-white "
              button="!border-primary border p-2 bg-white  group-hover:!bg-primary origin-center"
            >
              {<FaHeart className="!text-primary group-hover:!text-white" />}
            </DiamondButton> 
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              className="object-contain  w-full h-[160px]"
              src={`${URL}/${data.media?.url}`}
              alt=""
            />
          </div>
          <div className="pt-[45px] pb-[20px]">
            <h3 className="text-sm text-center ">{data.name}</h3>
            <h1 className="text-2xl font-normal  text-center !text-primary mt-1">
              {data.price}
            </h1>
          </div>
        </div>

        <div className="realtive z-[999999999999999] ">
          <div className="absolute z-[999999999999999] bottom-0 !w-[50px] !h-[50px] translate-y-1/2 left-1/2 -translate-x-1/2 default-transition defaultcard-product-addcart">
            <DiamondButton
              containerButton="group h-full bg-white !border-primary w-full border "
              button="!border-primary !bg-primary origin-center "
            >
              {<FaShoppingCart className="!text-white" />}
            </DiamondButton>
          </div>
        </div>
      </div>
      {adapteHeightBottom && <div className="w-full  relative z-[-1]" style={{ height: `${valueAdapteHeightBottom}px` }}></div>}
    </div>
  );
};

export default DefaultCard;
