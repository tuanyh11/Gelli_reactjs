import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import DiamondButton from './DiamondButton'

const ArrowButton = () => {
    return (
        <div>
            <div className="flex  relative cursor-pointer">
                <div className='absolute top-1 bottom-0 left-0'>
                    <DiamondButton
                        containerButton=" group !border-none"
                        button="!border-primary border p-2 bg-white   group-hover:!bg-white  origin-center"
                    >
                        {<FaShoppingCart className="!text-primary " />}
                    </DiamondButton>
                </div>
                <div className="flex items-center justify-center ml-4  py-[11px] uppercase !bg-primary rounded-md pl-9 pr-3 text-white">Add to cart</div>
            </div>
        </div>
    )
}

export default ArrowButton