import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Dropdown from '../Components/UI/Dropdown'

const sortType = [
  {
    name: 'default',
  },
  {
    name: 'alphabetical A-Z',
  },
  {
    name: 'alphabetical Z-A',
  }
]

const renderHeader = () => {
  return (
    <div className='flex items-center font-medium capitalize text-sm border border-b-c-1 cursor-pointer py-2 px-3' >
      <div className=''>sort by</div>
      <div className='h-6 w-[1px] bg-gray-400 mx-3'></div>
      <div className='flex items-center'>
        <span className="!text-primary font-bold ">Default</span>
        <FaAngleDown className='ml-2'/>
      </div>
    </div>
  )
}

const renderBody = (items,  handleOnClick) => {
  return (
    <ul className='text-start'>
      {items.map((item, index) => (
        <li
          className='px-4 py-2 text-sm leading-[1]'
          key={index}

        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

const Shop = () => {
  return (
    <div>
       <div >
          <button className='relative'>
            <Dropdown
            renderHeader={() => renderHeader()}
            renderBody={() => renderBody(sortType)}
            />
          </button>
       </div>
    </div>
  )
}

export default Shop