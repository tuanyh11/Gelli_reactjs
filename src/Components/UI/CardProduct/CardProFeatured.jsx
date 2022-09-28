import React from 'react'

const CardProFeatured = ({data}) => {
  return (
    <div className='flex '>
        <div className="">
            <img src={data.image} alt=""/> 
        </div>
        <div className=''>
            <h1 className="">{data.name}</h1>
            <p>{data.price}</p>
        </div>
    </div>
  )
}

export default CardProFeatured