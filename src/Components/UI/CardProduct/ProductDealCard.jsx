import React from 'react'
import { FaHeart, FaSearch } from 'react-icons/fa'
import DiamondButton from '../Button/DiamondButton'



const ProductDealCard = ({data}) => {
  return (
    <div className='p-2'>
        <div className="w-full h-[20px] relative z-[-1]"></div>
        <div className=" p-[30px] border border-c-4 hover:!border-primary default-transition relative z-[1] card-product-content">
          <div className="absolute flex items-center top-0 bg-white !-translate-y-1/2 left-1/2 -translate-x-1/2 product-action-addcart">

                <div className="flex items-center !text-primary">
                    <div className="!mr-2">
                        <DiamondButton
                            containerButton="!p-[0px] transition !border-0"
                            button='!bg-primary group-hover:!scale-[1.0]'
                        >
                        </DiamondButton>
                    </div>
                    <div className="flex flex-col items-center !mx-2">
                        <p className='leading-[1] font-bold text-xl '>05</p>
                        <p className='font-medium leading-[1] text-base'>days</p>
                    </div>
                    <div className="flex flex-col items-center !mx-2">
                        <p className='leading-[1] font-bold text-xl ' >05</p>
                        <p className='font-medium leading-[1] text-base'>days</p>
                    </div>
                    <div className="flex flex-col items-center !mx-2">
                        <p className='leading-[1] font-bold text-xl'>05</p>
                        <p className='font-medium leading-[1] text-base'>days</p>
                    </div>
                    <div className="flex flex-col items-center !mx-2">
                        <p className='leading-[1] font-bold text-xl'>05</p>
                        <p className='font-medium leading-[1] text-base'>days</p>
                    </div>
                    <div className="!ml-2">
                        <DiamondButton
                            containerButton="!p-[0px]  transition !border-0"
                            button='!bg-primary '
                        >
                        </DiamondButton>
                    </div>
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

          <div className=" flex items-center justify-center bottom-[0] translate-y-1/2  absolute z-[99999999]  right-1/2 translate-x-1/2 product-content-actions">
              <div className="mr-2 product-action-button">
                <DiamondButton
                    containerButton="!w-full !h-full group !p-[5px] transition"
                    button="!border-primary border p-2 bg-white  group-hover:!scale-[1.2] group-hover:!bg-primary origin-center"
                >
                    {<FaSearch className="!text-primary group-hover:!text-white" />}
                </DiamondButton>
              </div>
              <div className="m-2 product-action-button">
                <DiamondButton
                    containerButton="!w-full !h-full group !p-[5px] transition"
                    button="!border-primary border p-2 bg-white  group-hover:!scale-[1.2] group-hover:!bg-primary origin-center "
                >
                    {<FaHeart className="!text-primary group-hover:!text-white" />}
                </DiamondButton>
              </div>
              <div className="ml-2 product-action-button">
                <DiamondButton
                    containerButton="!w-full !h-full group !p-[5px] transition"
                    button="!border-primary border p-2 bg-white  group-hover:!scale-[1.2] group-hover:!bg-primary origin-center"
                >
                    {<FaHeart className="!text-primary group-hover:!text-white" />}
                </DiamondButton>
              </div>
          </div>
        </div>
        <div className="w-full h-[80px] relative z-[-1]"></div>
    </div>
  )
}

export default ProductDealCard