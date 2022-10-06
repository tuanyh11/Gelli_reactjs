import React from 'react'

const CardProFeatured = ({data}) => {
  return (
    <div className='flex group cursor-pointer'>
        <div className="p-3 w-[100px] h-[90px] flex items-center group-hover:!border-primary default-transition border mr-2 ">
            <img src={data.image} alt="" className='w-full h-full ' /> 
        </div>
        <div className=''>
            <h1 className="font-medium text-[15px]  leading-5">{data.name}</h1>
            <p className='text-xl !text-primary'>{data.price}</p>
        </div>
    </div>
  )
}

export default CardProFeatured